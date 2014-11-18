var CGNext = function(channel, layer, flashLayer) {

    var command = 'CG ' + channel + '-' + (layer || 0) + ' NEXT ' + flashLayer;

    return command;
};

module.exports = CGNext;