const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

io.on('connection', socket => {
	socket.broadcast.emit('join');

	socket.on('disconnect', () => {
		socket.broadcast.emit('disconnect');
	});

	socket.on('chat message', msg => {
		io.emit('chat message', msg);
	});
});



app.listen(port, '0.0.0.0', (err) => {
	if (err) {
		console.log(err);
	}
	console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
