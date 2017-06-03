const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

if (typeof io.origins === 'function') {
	io.origins('*:*');
} else {
	io.set('origins', '*:*');
}

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

app.listen(port, host, (err) => {
	if (err) {
		console.log(err);
	}
	console.info('==> 🌎 Listening on port %s. Open up http://' + host + ':%s/ in your browser.', port, port);
});
