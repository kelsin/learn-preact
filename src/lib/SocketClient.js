import io from 'socket.io-client';

const socket = io('http://192.168.13.107:4000');

const SocketClient = {
    sendMessage(msg) {
        console.log('SocketClient:sendMessage', msg);
        socket.emit(msg);
    }
}

export default SocketClient;
