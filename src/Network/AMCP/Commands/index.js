/*
 * AMCP Protocol:
 * http://casparcg.com/wiki/CasparCG_2.0_AMCP_Protocol
 */

module.exports = {
    //Basic commands
    Play: require('./Play'),
    Pause: require('./Pause'),
    Clear: require('./Clear'),
    Stop: require('./Stop'),

    //Mixer Commands
    ChannelGrid: require('./ChannelGrid'),

    //Quary Commands
    Cls: require('./Cls'),
    Version: require('./Version'),
    Info: require('./Info'),
    Diag: require('./Diag'),
    Bye: require('./Bye'),
    Kill: require('./Kill')
};