var Client = require('./src/Network/Client'),
    AMCPCommands = require('./src/Network/AMCP/Commands/index');

var client = new Client();

client.connect('192.168.1.104', 5250);

client.on(
    'response',
    function(response) {
        console.log('Server reply: ' + response.toString());
    }
);

setTimeout(
    function() {
        client.sendCommand(AMCPCommands.Play(1, 1, 'AMB', 'SLIDE 10 LEFT'));
        client.sendCommand(AMCPCommands.Bye());
    },
    1000
);