var Play = function(videoChannel, layer, clip) {
    return 'PLAY ' + videoChannel + '-' + layer + ' "' + clip + '"';
};

module.exports = Play;