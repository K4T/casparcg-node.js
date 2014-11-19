/*
 * TODO:
 * - add full implementation
 */

var LoadBg = function(channel, layer, clip, loop, auto) {

    var command = 'LOADBG ' + channel + '-' + layer + ' \"' + clip + '\"';

    if (loop) {
        command += ' LOOP';
    }

    if (auto) {
        command += ' AUTO';
    }

    return command;
};

module.exports = LoadBg;