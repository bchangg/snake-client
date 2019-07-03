const {setupInput} = require('./input');
const {connect} = require('./client');


console.log('Connecting...');
let connection = connect();
setupInput(connection);

