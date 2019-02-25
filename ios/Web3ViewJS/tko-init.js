
var addressHex = "%@";
var rpcURL = "%@";
var chainID = "%d";
//function executeCallback (id, error, value) {
//  Tko.executeCallback(id, error, value)
//}
window.Tko.init(rpcURL, {
  getAccounts: function (cb) { cb(null, [addressHex]) },
  processTransaction: function (tx, cb){
    console.log('signing a transaction:' + JSON.stringify(tx) + ', cb:' + cb)
//    const { id = 8888 } = tx
    var id = tx.id || 8888
    Tko.addCallback(id, cb)
    webkit.messageHandlers.signTransaction.postMessage(JSON.stringify({"name": "signTransaction", "object": tx, id: id}))
  },
  signMessage: function (msgParams, cb) {
//    const { data } = msgParams
//    const { id = 8888 } = msgParams
    console.log('signing a message:' + JSON.stringify(msgParams) + ', cb:' + cb)
    var data = msgParams.data
    var id = msgParams.id || 8888
    Tko.addCallback(id, cb)
    webkit.messageHandlers.signMessage.postMessage(JSON.stringify({"name": "signMessage", "object": { data }, id: id}))
  },
  signPersonalMessage: function (msgParams, cb) {
//    const { data } = msgParams
//    const { id = 8888 } = msgParams
    var data = msgParams.data
    var id = msgParams.id || 8888
    Tko.addCallback(id, cb)
    webkit.messageHandlers.signPersonalMessage.postMessage(JSON.stringify({"name": "signPersonalMessage", "object": { data }, id: id}))
  },
  signTypedMessage: function (msgParams, cb) {
//    const { data } = msgParams
//    const { id = 8888 } = msgParams
    console.log('signing a typed message:' + JSON.stringify(msgParams) + ', cb:' + cb)
    var data = msgParams.data
    var id = msgParams.id || 8888
    Tko.addCallback(id, cb)
    webkit.messageHandlers.signTypedMessage.postMessage(JSON.stringify({"name": "signTypedMessage", "object": { data }, id: id}))
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
