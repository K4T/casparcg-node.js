var events = require('events');
var net = require('net');

var ServerConnection = function() {
    var socket,
        isConnected = false,
        eventEmitter = new events.EventEmitter();

    var connect = function(hostAddress, port) {
        socket = net.connect({
            host: hostAddress,
            port: port
        });

        socket.on('connect', function() {
            isConnected = true;

            console.log('Connected to: ' + hostAddress + ':' + port);
        });

        socket.on('data', function(data) {
            console.log(data.toString());
        });

        socket.on('error', function(error) {
            console.log('Server connection error: ' + error);
        });

        socket.on('end', function() {
            isConnected = false;

            console.log('Server connection ended.');
        });
    };

    var disconnect = function() {
        socket.end();
    };

    var sendCommand = function(command) {
        socket.write (
            command + '\r\n',
            function() {
                console.log('Command sent.');
            }
        );
    };

    var getEventEmitter = function() {
        return eventEmitter;
    };

    return {
        connect: connect,
        disconnect: disconnect,
        sendCommand: sendCommand,
        getEventEmitter: getEventEmitter
    }
};

module.exports = ServerConnection;