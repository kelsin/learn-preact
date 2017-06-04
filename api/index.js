const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

// app.use(cors());

// app.use((req, res, next) => {
// 	res.setHeader('Access-Control-Allow-Headers', 'http://localhost:8080');
// 	next();
// });

// io.origins('*:*');

app.use(function(req, res, next) {
	var origin = req.get('origin'); 
	console.log(req);
	if (origin) {
		res.setHeader('Access-Control-Allow-Origin', origin);
		res.setHeader('Access-Control-Allow-Credentials', true);
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	}
	next();
});

app.get('/', (req, res) => {
	res.send('Hello, world!');
});

io.on('connection', socket => {
	// socket.broadcast.emit('join');

	socket.on('disconnect', () => {
		// socket.broadcast.emit('disconnect');
	});

	socket.on('chat message', msg => {
		console.log('chat message', msg);
		socket.broadcast.emit('chat message', msg);
	});
});

http.listen(port, host, (err) => {
	if (err) {
		console.log(err);
	}
	console.info('==> 🌎 Listening on port %s. Open up http://' + host + ':%s/ in your browser.', port, port);
});
