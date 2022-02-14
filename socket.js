import http from 'http';
import { Server } from 'socket.io';
import app from './app.js';

const server = http.createServer(app);

const io = new Server(server);

server.listen(5050, () => {
  console.log('Listening on port *:5050');
});

export default io;
