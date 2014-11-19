var Pause = function(channel, layer) {

    var command = 'PAUSE ';

    command += channel;
    command += '-'+(layer || 0);

    return command;
};

module.exports = Pause;