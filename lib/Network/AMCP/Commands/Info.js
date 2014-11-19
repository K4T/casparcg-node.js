var Info = function() {

    var command = 'INFO ';

    switch (arguments.length) {
        case 0:
            command = command.trim();
            break;

        case 1:
            command += arguments[0];
            break;

        case 2:
            if (arguments[0] === 'TEMPLATE') {
                var templateName = arguments[1];
                command += arguments[0] + ' ' + templateName;
            } else {
                var channel = arguments[0];

                if (arguments[1] === 'DELAY') {
                    command += channel + ' ' + arguments[1];
                } else {
                   var layer = arguments[1];
                    command += channel + '-' + layer;
                }
            }
            break;

        case 3:
            var channel = arguments[0],
                layer = arguments[1];

                command += channel + '-' + layer + ' ' + arguments[2];
            break;

        default:
            // throw new Error('INFO command: wrong parameters.');
    }

    return command;
};

module.exports = Info;