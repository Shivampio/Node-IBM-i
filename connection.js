const {Connection} = require('itoolkit');
   
const conn = new Connection({
    transport: 'ssh',
    transportOptions: { host: '129.40.95.121', username: 'shivam', password: 'welcome' }
 });

module.exports = conn