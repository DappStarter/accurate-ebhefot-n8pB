require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remain proof half clinic orange trumpet'; 
let testAccounts = [
"0x1a8ba89babb01ff5e845a165e59dcc2d246609bc3f544c237f4ca53b1cedec6f",
"0x8611101d7cc70ed163105d08270f9609cb2124cb28a58013216ef54d49b70555",
"0x1095521359060945f7764c40ef15b1f0b87eb6ea9c7a161c03b43735b189e8fa",
"0x261e89667862d11aad6d6772f24fc5719f7fefa0a9bfd150e2711763a182bda4",
"0x4be9b1ec1541c598b7b609e85a8f4384b88e29ecde18823389ed08044a7ca637",
"0x55e3fbe0e7ebad91299f808c42c66c19913b0ec9c973c7dc16750c8b37351d86",
"0x6a30904c6f199b541e9ce4023eba1dffd7df91eb6d144c7f52ba0c98727bfeed",
"0xae56acd6330b854b9a5470c2ca050c63c92b6ef147441d514711771717da1a64",
"0x11706b69b5ba52b24b030c0896e0612820f942d9b493662db376d9f238968c1a",
"0xca319f3ad74a77c02def95ccfb909d12eb8177d1c87e0d9f744cceefde0cf68e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

