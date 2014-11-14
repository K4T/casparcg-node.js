var Info = function(channel, layer) {

    var command = 'INFO ';

    command += channel;

    if (typeof layer !== 'undefined') {
        command += '-'+layer
    }

    return command;
};

module.exports = Info;