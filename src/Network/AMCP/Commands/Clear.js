var Clear = function(channel, layer) {

    var command = 'CLEAR ';

    command += channel;

    if (typeof layer !== 'undefined') {
        command += '-'+layer
    }

    return command;
};

module.exports = Clear;