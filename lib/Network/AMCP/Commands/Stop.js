var Stop = function(channel, layer) {

    var command = 'STOP ';

    command += channel;
    command += '-'+(layer || 0);

    return command;
};

module.exports = Stop;