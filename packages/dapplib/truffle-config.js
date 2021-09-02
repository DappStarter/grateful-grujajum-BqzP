require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remain unusual install fantasy fold typical'; 
let testAccounts = [
"0x56f9c3f7fe8c54817d847ec71ce82a8692d1ec6a00018d9b84247a44f553f497",
"0xcd142d787b4d8a82d349c1a0c9d5ab320ad2bb6107623c620feb376f57d0a34f",
"0x1df03054b2bec56ce99845d005f5b2da4fa3eaff223a90eb464ef23ac36bb5ed",
"0x7467d0d155a7b47be655e3a788158843accc9eef92b64c855588440af0e7bc8a",
"0xc8eb173cc7fa6134e0082dc4c961196ec76f63470b9ec33c72692b070f9c8c38",
"0x949398776ff7556a4b8b251fd3f2edf5e29b00788afa83416f9c309dca581de9",
"0x22cfaafb5f6355b069f28f0d97b9da66dc30092180fa75a87f4f0ad1b5967780",
"0xc233c52287b7b9bad2b03ed293a96635a61bdb1a4e89a2e637e265d49cb76f0c",
"0x483b14ec718441c22f4800f20ffbe9f8b5c0c4aac82a84cb2566ba80a64e2576",
"0x522ab75be9b842f208dfc365c834ac826d749210434145fc127f2c22f7ae5305"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

