import io from './socket.js';

io.on('connection', (socket) => {
  console.log('Client connected...');

  socket.on('deployed', () => {
    console.log('New deploy detected!');
    socket.emit('receivedNoti');
  });
});

process.on('SIGINT', () => {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
  process.exit(1);
});
