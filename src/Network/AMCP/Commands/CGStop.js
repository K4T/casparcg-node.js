var CGStop = function(channel, layer, flashLayer) {

    var command = 'CG ' + channel + '-' + (layer || 0) + ' STOP ' + flashLayer;

    return command;
};

module.exports = CGStop;