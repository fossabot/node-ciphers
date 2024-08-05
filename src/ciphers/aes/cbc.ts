import type { BinaryLike } from 'crypto';

import type { AESCipherEncodingOptions } from '../../types';
import BaseAESEncryptAndDecrypt from './base/encryptAndDecrypt';

export class CBC extends BaseAESEncryptAndDecrypt {
	constructor(key: BinaryLike, encodingOptions?: AESCipherEncodingOptions) {
		super(key, 'cbc', encodingOptions);
	}
}

export default CBC;
