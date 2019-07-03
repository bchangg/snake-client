const net = require('net');

/*
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.88.218',
    port: 50541
  });
  // set encoding for this client to 'utf8'
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}

console.log('Connecting...');
connect();