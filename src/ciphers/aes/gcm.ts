import { randomBytes } from 'crypto';
import type { BinaryLike } from 'crypto';
import type { TransformOptions } from 'stream';

import type { HasAuthTagAESCipherEncodingOptions } from '../../types';
import BaseAESCipher from './base';

export class GCM extends BaseAESCipher<HasAuthTagAESCipherEncodingOptions> {
	#ivLength: number;

	constructor(key: BinaryLike, encodingOptions?: HasAuthTagAESCipherEncodingOptions, ivLength: number = 12) {
		super(key, 'gcm', encodingOptions);
		this.#ivLength = ivLength;
	}

	decrypt(encryptedData: BinaryLike, iv: BinaryLike, authTag: BinaryLike, authTagLength?: number, encodingOptions?: HasAuthTagAESCipherEncodingOptions.Decrypt, decipherOptions?: TransformOptions) {
		try {
			const decipher = this.createDecipher(typeof iv === 'string' ? Buffer.from(iv, encodingOptions?.iv || this.encodingOptions.iv) : iv, { authTagLength, ...decipherOptions });
			decipher.setAuthTag(typeof authTag === 'string' ? Buffer.from(authTag, encodingOptions?.authTag || this.encodingOptions.authTag) : authTag);
			return this.getDecipherResult(decipher, encryptedData, encodingOptions);
		} catch (error) {}
	}

	decryptToJSON<T = any>(encryptedData: BinaryLike, iv: BinaryLike, authTag: BinaryLike, authTagLength?: number, encodingOptions?: HasAuthTagAESCipherEncodingOptions.Decrypt, decipherOptions?: TransformOptions) {
		return this.parseJSON<T>(this.decrypt(encryptedData, iv, authTag, authTagLength, encodingOptions, decipherOptions));
	}

	encrypt(data: BinaryLike, authTagLength?: number, ivLength: number = this.#ivLength, encodingOptions?: HasAuthTagAESCipherEncodingOptions.Encrypt, cipherOptions?: TransformOptions) {
		const iv = randomBytes(ivLength);
		try {
			const cipher = this.createCipher(iv, { authTagLength, ...cipherOptions });
			const encryptedData = this.getCipherResult(cipher, data, encodingOptions);
			return {
				authTag: cipher.getAuthTag().toString(encodingOptions?.authTag || this.encodingOptions.authTag),
				authTagLength,
				data: encryptedData,
				iv: iv.toString(encodingOptions?.iv || this.encodingOptions.iv)
			};
		} catch (error) {}
	}

	encryptJSON(data: any, authTagLength?: number, ivLength: number = this.#ivLength, encodingOptions?: HasAuthTagAESCipherEncodingOptions.Encrypt, cipherOptions?: TransformOptions) {
		return this.encrypt(JSON.stringify(data), authTagLength, ivLength, encodingOptions, cipherOptions);
	}
}

export default GCM;
