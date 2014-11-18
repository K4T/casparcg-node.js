var CGUpdate = function(channel, layer, flashLayer, data) {

    var command = 'CG ' + channel + '-' + (layer || 0) + ' UPDATE ' + flashLayer + ' \"' + data + '\"';

    return command;
};

module.exports = CGUpdate;