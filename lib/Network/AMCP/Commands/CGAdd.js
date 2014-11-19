var CGAdd = function(channel, layer, flashLayer, template, playOnLoad, data) {

    var command = 'CG ' + channel + '-' + (layer || 0) + ' ADD ' + flashLayer + ' \"' + template + '\" ' + playOnLoad;

    if (typeof data !== 'undefined') {
        command += ' \"' + data + '\"';
    }

    return command;
};

module.exports = CGAdd;