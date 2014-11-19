var CGInvoke = function(channel, layer, flashLayer, method) {

    var command = 'CG ' + channel + '-' + (layer || 0) + ' INVOKE ' + flashLayer + ' ' + method;

    return command;
};

module.exports = CGInvoke;