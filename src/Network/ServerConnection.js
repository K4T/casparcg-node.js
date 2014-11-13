var events = require('events');
var net = require('net');

var Response = require('./AMCP/Response');

var ServerConnection = function() {
    var socket,
        isConnected = false,
        commandsQueue = [];

    var connect = function(hostAddress, port) {
        socket = net.connect({
            host: hostAddress,
            port: port
        });

        socket.on('connect', function() {
            isConnected = true;

            console.log('Connected to: ' + hostAddress + ':' + port);
        });

        socket.on('data', function(dataChunk) {
            console.log('Receiving data...');

            var response = new Response();
            response.parseReceivedData(dataChunk);

            console.log(response.toString());

            commandsQueue.shift();
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
        commandsQueue.push(command);

        console.log('Sending command: ' + commandsQueue[0]);

        socket.write (
            commandsQueue[0] + '\r\n',
            function() {
                console.log('Command ' + commandsQueue[0] + ' has been sent.');
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