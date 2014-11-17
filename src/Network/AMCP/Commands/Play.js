var Play = function() {

    var command = 'PLAY ';

    var channel = arguments[0],
        layer = (arguments[1] || 0);

    switch (arguments.length) {
        case 1:
        case 2:
            command += channel + '-' + layer;
            break;

        case 3:
            var clip = arguments[2];
            
            command += channel + '-' + layer + ' \"' + clip + '\"';
            break;

        case 4:
            var clip = arguments[2],
                loadBGparams = arguments[3];

                command += channel + '-' + layer + ' \"' + clip + '\" ' + loadBGparams;
            break;

        default:
        // throw new Error('PLAY command: wrong parameters.');
    }

    return command;
};

module.exports = Play;