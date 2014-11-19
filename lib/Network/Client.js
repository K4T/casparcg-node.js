var net = require('net'),
    events = require('events');

var Response = require('./AMCP/Response');

var Client = function(hostAddress, port) {
    var socket = {},
        receivedData = '',
        isConnected = false,
        canSendCommand = true,
        commandsQueue = [],
        eventEmitter = new events.EventEmitter();

    var connect = function() {
        socket = net.connect({
            host: hostAddress,
            port: port
        });

        socket.setEncoding('utf8');

        socket.on('connect', function() {
            isConnected = true;
            eventEmitter.emit(
                'connect',
                {
                    hostAddress: hostAddress,
                    port: port
                }
            );
        });

        socket.on('data', function(chunk) {
            _processChunk(chunk);
        });

        socket.on('error', function(error) {
            eventEmitter.emit('error', error);
        });

        socket.on('end', function() {
            isConnected = false;
            eventEmitter.emit('disconnect');
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
            socket.write(
                commandsQueue[0] + '\r\n',
                function() {
                    eventEmitter.emit('sent', commandsQueue[0]);
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

        eventEmitter.emit('response', commandsQueue[0], response);

        canSendCommand = true;
        receivedData = '';
        commandsQueue.shift();

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