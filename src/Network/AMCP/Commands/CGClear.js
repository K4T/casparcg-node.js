var CGClear = function(channel, layer) {

    var command = 'CG ' + channel + '-' + (layer || 0) + ' CLEAR';

    return command;
};

module.exports = CGClear;