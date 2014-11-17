var ServerConnection = require('./Network/ServerConnection');
var AMCPCommands = require('./Network/AMCP/Commands/');

var Client = function() {
    var sc; //CasparCG server connection

    var connect = function(hostAddress, port) {
        sc = new ServerConnection();
        sc.connect(hostAddress, port);

        sc.on(
            'response',
            function(response) {
                console.log('Server reply: ' + response.getHeader());
            }
        );

        setTimeout(
            function() {
                sc.sendCommand(AMCPCommands.Play(1, 1, 'AMB'));
                sc.sendCommand(AMCPCommands.Info(1, 1));
                disconnect();
            },
            1000
        );
    };

    var disconnect = function() {
        sc.sendCommand(AMCPCommands.Bye());
    };

    return {
        connect: connect,
        disconnect: disconnect
    }
};

module.exports = Client;