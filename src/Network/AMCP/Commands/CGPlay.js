var CGPlay = function(channel, layer, flashLayer) {

    var command = 'CG ' + channel + '-' + (layer || 0) + ' PLAY ' + flashLayer;

    return command;
};

module.exports = CGPlay;