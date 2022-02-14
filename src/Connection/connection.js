const {Connection} = require('itoolkit');
   
var _conn;

function initConnection() {
    _conn = new Connection({
        transport: 'ssh',
        transportOptions: { host: process.env.HOST, username: process.env.USERNSME, password: process.env.PASSWORD }
     });
}

function getConnection() {
    return _conn;
}

module.exports = {
    initConnection,
    getConnection
}