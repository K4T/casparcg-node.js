var MixerMasterVolume = function(channel, volume) {

    var command = 'MIXER ' + channel + ' MASTERVOLUME ' + volume;

    return command;
};

module.exports = MixerMasterVolume;