const net = require('net');
const {IP} = require('./constants');
const {PORT} = require('./constants');

/*
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // set encoding for this client to 'utf8'
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: BHC");
    // setInterval(() => {
    // conn.write("Move: up"); 
    // conn.write("Move: right"); 
    // }, 200);
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
}

module.exports = {
  connect
};