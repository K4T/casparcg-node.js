var net = require('net'),
    events = require('events');

var Response = require('./AMCP/Response');

var Client = function() {
    var socket,
        receivedData = '',
        isConnected = false,
        canSendCommand = true,
        commandsQueue = [],
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

        socket.on('data', function(chunk) {
            _processChunk(chunk);
        });

        socket.on('error', function(error) {
            console.log('Server connection error: ' + error);
        });

        socket.on('end', function() {
            isConnected = false;

            console.log('Server connection has been ended.');
        });
    };

    var disconnect = function() {
        if (isConnected) {
            socket.end('BYE\r\n');
        }
    };

    var on = function(type, listener) {
        eventEmitter.on(type, listener);
    };

    var sendCommand = function(command) {
        commandsQueue.push(command);
        _sendCommandFromQueue(0);
    };

    var _sendCommandFromQueue = function() {
        if (!commandsQueue.length) {
            return;
        }

        if (canSendCommand) {
            console.log('Sending command: ' + commandsQueue[0]);

            socket.write(
                commandsQueue[0] + '\r\n',
                function() {
                    console.log('Command ' + commandsQueue[0] + ' has been sent.');
                    commandsQueue.shift();
                }
            );

            canSendCommand = false;
        }
    };

    var _processChunk = function(chunk) {
        var shouldIWaitForMoreData = function(receivedData) {
                return receivedData.substr(-2) != '\r\n';
            },
            response = new Response();

        receivedData += chunk;

        if (shouldIWaitForMoreData(receivedData)) {
            return;
        }

        response.parseReceivedData(receivedData);

        eventEmitter.emit('response', response);

        canSendCommand = true;
        receivedData = '';

        _sendCommandFromQueue();
    };

    return {
        connect: connect,
        disconnect: disconnect,
        sendCommand: sendCommand,
        on : on
    }
};

module.exports = Client;