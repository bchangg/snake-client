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
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server!");
    // server.write("Name: BHC");
    conn.write("Name: BHC");
  });
  
  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
}

module.exports = {
  connect
};