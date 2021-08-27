const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec
const ec = new EC('secp256k1');


const myKey = ec.keyFromPrivate('bf1dfdd7e1bbeb598aa80dc41c6c283bcbe576f2fb561a3742334f3a5032f0e2');
const myWalletAddress = myKey.getPublic('hex');


let gizmocoin = new Blockchain();
gizmocoin.minePendingTransactions(myWalletAddress);
const tx1 = new Transaction(myWalletAddress, ' ', 10);
tx1.signTransaction(myKey);
gizmocoin.addTransaction(tx1);

console.log('Mining blocks...');
gizmocoin.minePendingTransactions(myWalletAddress);

console.log(gizmocoin.getBalanceOfAddress(myWalletAddress));
//gizmocoin.addBlock(new Block(1, "02/02/2021", { amount : 4} ));
//gizmocoin.addBlock(new Block(2, "03/02/2021", { amount : 10} ));
//gizmocoin.addBlock(new Block(3, "04/02/2021", { amount : 4} ));

//console.log('Is blockchain valid? ' + gizmocoin.isChainValid());
//console.log(JSON.stringify(gizmocoin, null, 4));

//gizmocoin.chain[1].data = { amount : 100 };
//gizmocoin.chain[1].hash = gizmocoin.chain[1].calculateHash();
//console.log('Is blockchain valid? ' + gizmocoin.isChainValid());

