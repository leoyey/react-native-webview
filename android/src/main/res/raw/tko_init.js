
var addressHex = "%1$s";
var rpcURL = "%2$s";
var chainID = "%3$s";
//function executeCallback (id, error, value) {
//  Tko.executeCallback(id, error, value)
//}
//function onSignSuccessful(id, value) {
//  Tko.executeCallback(id, null, value)
//}
//function onSignError(id, error) {
//  Tko.executeCallback(id, error, null)
//}
window.Tko.init(rpcURL, {
  getAccounts: function (cb) { cb(null, [addressHex]) },
  processTransaction: function (tx, cb){
    console.log('signing a transaction:' + JSON.stringify(tx) + ', cb:' + cb)
//    const { id = 8888 } = tx
    var id = tx.id || 8888
    Tko.addCallback(id, cb)
    var to = tx.to
    var gasLimit = tx.gas
    var gasPrice = tx.gasPrice
    var data = tx.data
    var nonce = tx.nonce || -1
    tko.signTransaction(id, to, tx.value, nonce, gasLimit, gasPrice, data);
  },
  signMessage: function (msgParams, cb) {
//    const { data } = msgParams
//    const { id = 8888 } = msgParams
    console.log('signing a message:' + JSON.stringify(msgParams) + ', cb:' + cb)
    var data = msgParams.data
    var id = msgParams.id || 8888
    Tko.addCallback(id, cb)
    tko.signMessage(id, data);
  },
  signPersonalMessage: function (msgParams, cb) {
//    const { data } = msgParams
//    const { id = 8888 } = msgParams
    console.log('signing a personal message:' + JSON.stringify(msgParams) + ', cb:' + cb)
    var data = msgParams.data
    var id = msgParams.id || 8888
    Tko.addCallback(id, cb)
    tko.signPersonalMessage(id, data);
  },
  signTypedMessage: function (msgParams, cb) {
//    const { data } = msgParams
//    const { id = 8888 } = msgParams
    console.log('signing a typed message:' + JSON.stringify(msgParams) + ', cb:' + cb)
    var data = msgParams.data
    var id = msgParams.id || 8888
    Tko.addCallback(id, cb)
    tko.signTypedMessage(id, JSON.stringify(data))
  }
}, {
    address: addressHex,
    networkVersion: chainID
})
window.web3.setProvider = function () {
  console.debug('Tko web3 - overrode web3.setProvider')
}
window.web3.eth.defaultAccount = addressHex
window.web3.version.getNetwork = function(cb) {
    cb(null, chainID)
}
window.web3.eth.getCoinbase = function(cb) {
    return cb(null, addressHex)
}