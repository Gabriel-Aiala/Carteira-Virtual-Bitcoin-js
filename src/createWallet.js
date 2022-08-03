const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');
const bip32 = require('bip32');

const network = bitcoin.networks.testnet

const path = `m/49'/1'/0'/0`

let mnemonic =bip39.generateMnemonic()
let seed = bip39.mnemonicToSeedSync(mnemonic)

let root= bip32.fromSeed(seed,network)

let account = root.derivePath(path)
let node = account.derive(0).derive(0)

let btcAdress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network:network,
}).address

console.log('carteira gerada')
console.log('endereço:'+btcAdress)
console.log('chave privada:'+node.toWIF())
console.log('seed:'+mnemonic)
