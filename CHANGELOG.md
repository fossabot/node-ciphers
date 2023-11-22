# Changelog

## v0.6.0

[compare changes](https://github.com/kiki-kanri/node-ciphers/compare/v0.5.0...v0.6.0)

### 🚀 Enhancements

- Add initial files for playground setup ([09d64e3](https://github.com/kiki-kanri/node-ciphers/commit/09d64e3))
- Add support for DES-EDE and DES-EDE3 modes ([298f724](https://github.com/kiki-kanri/node-ciphers/commit/298f724))

### 🩹 Fixes

- Resolve issue where IV is mandatory in ECB mode ([99f4428](https://github.com/kiki-kanri/node-ciphers/commit/99f4428))

### 📖 Documentation

- Update CHANGELOG with recent changes and fixes ([4d1ec15](https://github.com/kiki-kanri/node-ciphers/commit/4d1ec15))

### 🏡 Chore

- Upgrade dependencies ([6fe4f8c](https://github.com/kiki-kanri/node-ciphers/commit/6fe4f8c))

### ✅ Tests

- Update DES test cases for enhanced coverage and reliability ([4ea19ed](https://github.com/kiki-kanri/node-ciphers/commit/4ea19ed))

### ❤️ Contributors

- kiki-kanri

## v0.5.0

[compare changes](https://github.com/kiki-kanri/node-ciphers/compare/v0.4.0...v0.5.0)

### 🚀 Enhancements

- Add des base classes and types ([6bf7454](https://github.com/kiki-kanri/node-ciphers/commit/6bf7454))
- Add des cbc, cfb, cfb1, cfb8, ecb, ofb ciphers ([5e35238](https://github.com/kiki-kanri/node-ciphers/commit/5e35238))
- Add des tests and update data in aes tests ([3e3e2e6](https://github.com/kiki-kanri/node-ciphers/commit/3e3e2e6))
- Implement export functionality for DES ciphers ([7f3b203](https://github.com/kiki-kanri/node-ciphers/commit/7f3b203))

### 🩹 Fixes

- Correct encodingOptions type for aes ccm and gcm encryption/decryption ([fd8dd27](https://github.com/kiki-kanri/node-ciphers/commit/fd8dd27))

### 💅 Refactors

- Simplify test code ([60b2eb5](https://github.com/kiki-kanri/node-ciphers/commit/60b2eb5))
- Split options interface into smaller interfaces ([ea6027c](https://github.com/kiki-kanri/node-ciphers/commit/ea6027c))
- Consolidate constants into a single file ([7f540ca](https://github.com/kiki-kanri/node-ciphers/commit/7f540ca))

### 📖 Documentation

- Update keywords list in package.json ([7150a78](https://github.com/kiki-kanri/node-ciphers/commit/7150a78))

### 🏡 Chore

- Upgrade dependencies ([855fe04](https://github.com/kiki-kanri/node-ciphers/commit/855fe04))
- Upgrade dependencies ([95d76a4](https://github.com/kiki-kanri/node-ciphers/commit/95d76a4))

### ❤️ Contributors

- kiki-kanri

## v0.4.0

[compare changes](https://github.com/kiki-kanri/node-ciphers/compare/v0.3.0...v0.4.0)

### 🚀 Enhancements

- Change authTag, data, key, and iv to allow BinaryLike type ([e7bb3db](https://github.com/kiki-kanri/node-ciphers/commit/e7bb3db))

### 💅 Refactors

- Split base class and simplify ciphers implementations ([e2d89a5](https://github.com/kiki-kanri/node-ciphers/commit/e2d89a5))
- Update import syntax ([e568e32](https://github.com/kiki-kanri/node-ciphers/commit/e568e32))
- Rename catch clause variable from _ to error ([be1ef4f](https://github.com/kiki-kanri/node-ciphers/commit/be1ef4f))
- Streamline aes ecb decryption code ([0a148fd](https://github.com/kiki-kanri/node-ciphers/commit/0a148fd))
- Simplify type names ([4aad310](https://github.com/kiki-kanri/node-ciphers/commit/4aad310))
- Rename test functions ([345848d](https://github.com/kiki-kanri/node-ciphers/commit/345848d))
- Relocate tests directory and update code ([f8d42b5](https://github.com/kiki-kanri/node-ciphers/commit/f8d42b5))
- Update error messages in tests ([6b483c0](https://github.com/kiki-kanri/node-ciphers/commit/6b483c0))
- Remove reassignment of 'data' variable ([df385f6](https://github.com/kiki-kanri/node-ciphers/commit/df385f6))

### ❤️ Contributors

- kiki-kanri

## v0.3.0

[compare changes](https://github.com/kiki-kanri/node-ciphers/compare/v0.2.0...v0.3.0)

### 🚀 Enhancements

- Add author and keywords to package.json ([7b89178](https://github.com/kiki-kanri/node-ciphers/commit/7b89178))
- Allow passing cipher options in encrypt and decrypt methods ([388c2ea](https://github.com/kiki-kanri/node-ciphers/commit/388c2ea))
- Add aes ccm and gcm ciphers and types ([3543a13](https://github.com/kiki-kanri/node-ciphers/commit/3543a13))
- Add aes ciphers test functions ([1c4d4be](https://github.com/kiki-kanri/node-ciphers/commit/1c4d4be))
- Add aes ofb cipher ([1ee6f9e](https://github.com/kiki-kanri/node-ciphers/commit/1ee6f9e))

### 💅 Refactors

- Remove conversion assignment of data in encryption process ([f1b6e5c](https://github.com/kiki-kanri/node-ciphers/commit/f1b6e5c))
- Remove null type from iv parameter in decrypt method ([13c1885](https://github.com/kiki-kanri/node-ciphers/commit/13c1885))
- Restructure test code ([e274b0d](https://github.com/kiki-kanri/node-ciphers/commit/e274b0d))

### 📖 Documentation

- Update keywords list in package.json ([54bce09](https://github.com/kiki-kanri/node-ciphers/commit/54bce09))

### ❤️ Contributors

- kiki-kanri

## v0.2.0

[compare changes](https://github.com/kiki-kanri/node-ciphers/compare/v0.1.0...v0.2.0)

### 🚀 Enhancements

- Add base aes cipher class and types ([748d595](https://github.com/kiki-kanri/node-ciphers/commit/748d595))
- Add algorithm getter to BaseAESCipher class ([d996f11](https://github.com/kiki-kanri/node-ciphers/commit/d996f11))
- Add aes cbc, cfb, cfb1, cfb8 and ctr ciphers ([d07da79](https://github.com/kiki-kanri/node-ciphers/commit/d07da79))
- Set index export aes ciphers ([1d4b1c8](https://github.com/kiki-kanri/node-ciphers/commit/1d4b1c8))
- Add consola package ([f61b2fa](https://github.com/kiki-kanri/node-ciphers/commit/f61b2fa))
- Add ecb cipher ([ef66e0d](https://github.com/kiki-kanri/node-ciphers/commit/ef66e0d))

### 💅 Refactors

- Remove bun files and use tsx to run dev ([ca42704](https://github.com/kiki-kanri/node-ciphers/commit/ca42704))
- Rename AvailableAESMode to AvailableAESCipherMode ([c8ffb2b](https://github.com/kiki-kanri/node-ciphers/commit/c8ffb2b))
- Move check key and get algorithm into constructor block ([cbd5696](https://github.com/kiki-kanri/node-ciphers/commit/cbd5696))

### 🏡 Chore

- Add node types ([5f41b4b](https://github.com/kiki-kanri/node-ciphers/commit/5f41b4b))
- Set engines and type in package.json ([778405f](https://github.com/kiki-kanri/node-ciphers/commit/778405f))
- Add build tool and script ([0abfc9b](https://github.com/kiki-kanri/node-ciphers/commit/0abfc9b))
- Upgrade dependencies ([34de2ac](https://github.com/kiki-kanri/node-ciphers/commit/34de2ac))

### ❤️ Contributors

- kiki-kanri

## v0.1.0

### 📖 Documentation

- Add readme ([d119e9f](https://github.com/kiki-kanri/node-ciphers/commit/d119e9f))

### 🏡 Chore

- Add base files ([ab1d42c](https://github.com/kiki-kanri/node-ciphers/commit/ab1d42c))

### ❤️ Contributors

- kiki-kanri
