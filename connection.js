const {Connection} = require('itoolkit');
   
const conn = new Connection({
    transport: 'ssh',
    transportOptions: { host: '129.40.98.1', username: 'shivam', password: 'welcome' }
 });

module.exports = conn