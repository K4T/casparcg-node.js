/*
 * TODO:
 * - add full implementation
 */

var Load = function(channel, layer, clip, loop, auto) {

    var command = 'LOAD ' + channel + '-' + layer + ' \"' + clip + '\"';

    if (loop) {
        command += ' LOOP';
    }

    if (auto) {
        command += ' AUTO';
    }

    return command;
};

module.exports = Load;