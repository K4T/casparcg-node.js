var Clear = function(channel, layer) {

    var command = 'CLEAR ';

    command += channel;
    command += '-'+(layer || 0);

    return command;
};

module.exports = Clear;