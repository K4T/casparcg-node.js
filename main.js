var Client = require('./src/Network/Client'),
    AMCPCommands = require('./src/Network/AMCP/Commands/index');

var client = new Client('192.168.1.104', 5250);

client.connect();

client.on(
    'connect',
    function(connectionInfo) {
        console.log('Connected to: ' + connectionInfo['hostAddress'] + ':' + connectionInfo['port']);

        //Run playlist!
        setTimeout(
            function() {
                client.sendCommand(AMCPCommands.Play(1, 1, 'AMB', 'SLIDE 10 LEFT'));
                client.sendCommand(AMCPCommands.Bye());
            },
            1000
        );
    }
);

client.on(
    'disconnect',
    function() {
        console.log('Server connection has been ended.');
    }
);

client.on(
    'error',
    function(error) {
        console.log('Server connection error: ' + error);
    }
);

client.on(
    'sent',
    function(command) {
        console.log('Command "' + command + '" has been sent.');
    }
);

client.on(
    'response',
    function(response) {
        console.log('Server reply: ' + response.toString());
    }
);