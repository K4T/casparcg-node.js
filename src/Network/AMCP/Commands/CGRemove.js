var CGRemove = function(channel, layer, flashLayer) {

    var command = 'CG ' + channel + '-' + (layer || 0) + ' REMOVE ' + flashLayer;

    return command;
};

module.exports = CGRemove;