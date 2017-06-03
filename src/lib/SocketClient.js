import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const SocketClient = {
    sendMessage(msg) {
        console.log('SocketClient:sendMessage', msg);
        socket.emit(msg);
    }
}

export default SocketClient;
