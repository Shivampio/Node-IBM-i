const {Connection} = require('itoolkit');
   
var _conn;

function initConnection() {
    _conn = new Connection({
        transport: 'ssh',
        transportOptions: { host: '129.40.98.1', username: 'shivam', password: 'welcome' }
     });
}

function getConnection() {
    return _conn;
}

module.exports = {
    initConnection,
    getConnection
}