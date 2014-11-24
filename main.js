var Client = require('./lib/Network/Client'),
    AMCPCommands = require('./lib/Network/AMCP/Commands/index');

var client = new Client('localhost', 5250);

client.connect();

client.on(
    'connect',
    function(connectionInfo) {
        console.log('Connected to: ' + connectionInfo['hostAddress'] + ':' + connectionInfo['port']);

        client.sendCommand(AMCPCommands.Play(1, 1, 'AMB', 'SLIDE 10 LEFT'));
        client.sendCommand(AMCPCommands.Bye());
    }
);

client.on(
    'disconnect',
    function() {
        console.log('Server connection has been ended.');
    }
);

client.on(
    'connectionError',
    function(error) {
        console.log('Server connection error: ' + error);
    }
);

client.on(
    'sent',
    function(command) {
        console.log('Command ' + command + ' has been sent.');
    }
);

client.on(
    'response',
    function(command, response) {
        console.log('Server reply: ' + response.toString());
    }
);