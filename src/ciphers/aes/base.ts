import crypto from 'crypto';

import type { AESCipherEncodingOptions, AvailableAESCipherAlgorithm, AvailableAESCipherMode } from '@/types';

const availableCiphers: Readonly<string[]> = crypto.getCiphers();

export const defaultEncodingOptions: Readonly<Required<AESCipherEncodingOptions>> = {
	decryptInput: 'hex',
	decryptOutput: 'utf8',
	encryptInput: 'utf8',
	encryptOutput: 'hex',
	key: 'utf8',
	iv: 'hex'
};

export const keyLengthToBitsMap: Readonly<Record<number, 128 | 192 | 256>> = {
	16: 128,
	24: 192,
	32: 256
};

export abstract class BaseAESCipher {
	#algorithm: AvailableAESCipherAlgorithm;
	#encodingOptions: Required<AESCipherEncodingOptions>;
	#key: Buffer;

	constructor(key: Buffer | string, mode: AvailableAESCipherMode, encodingOptions?: AESCipherEncodingOptions) {
		this.#encodingOptions = { ...defaultEncodingOptions, ...encodingOptions };
		const keyBuffer = key instanceof Buffer ? key : Buffer.from(key, this.#encodingOptions.key);
		this.#algorithm = this.#checkKeyAndGetAlgorithm(keyBuffer, mode);
		this.#key = keyBuffer;
	}

	get algorithm() {
		return this.#algorithm;
	}

	#checkKeyAndGetAlgorithm(keyBuffer: Buffer, mode: AvailableAESCipherMode) {
		const modeBits = keyLengthToBitsMap[keyBuffer.length];
		if (!modeBits) throw new Error('Invalid key length');
		const algorithm = `aes-${modeBits}-${mode}` as const;
		if (!availableCiphers.includes(algorithm)) throw new Error('Invalid algorithm');
		return algorithm;
	}

	decrypt(encryptedData: string, iv: Buffer | null | string, encodingOptions?: AESCipherEncodingOptions.Decrypt) {
		if (iv) iv = iv instanceof Buffer ? iv : Buffer.from(iv, encodingOptions?.iv || this.#encodingOptions.iv);
		try {
			const decipher = crypto.createDecipheriv(this.#algorithm, this.#key, iv);
			// prettier-ignore
			return `${decipher.update(encryptedData, encodingOptions?.decryptInput || this.#encodingOptions.decryptInput, encodingOptions?.decryptOutput || this.#encodingOptions.decryptOutput)}${decipher.final(encodingOptions?.decryptOutput || this.#encodingOptions.decryptOutput)}`;
		} catch (_) {}
	}

	encrypt(data: Buffer | string, encodingOptions?: AESCipherEncodingOptions.Encrypt) {
		data = data instanceof Buffer ? data : Buffer.from(data, encodingOptions?.encryptInput || this.#encodingOptions.encryptInput);
		const iv = crypto.randomBytes(16);
		try {
			const cipher = crypto.createCipheriv(this.#algorithm, this.#key, iv);
			const encryptedData = `${cipher.update(data, undefined, encodingOptions?.encryptOutput || this.#encodingOptions.encryptOutput)}${cipher.final(encodingOptions?.encryptOutput || this.#encodingOptions.encryptOutput)}`;
			return { data: encryptedData, iv: iv.toString(encodingOptions?.iv || this.#encodingOptions.iv) };
		} catch (_) {}
	}
}

export default BaseAESCipher;