var Play = function(channel, layer, clip) {
    return 'PLAY ' + channel + '-' + layer + ' \"' + clip + '\"';
};

module.exports = Play;