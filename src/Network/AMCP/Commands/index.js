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
    Print: require('./Print'),

    //Data Commands
    DataStore: require('./DataStore'),
    DataRetrieve: require('./DataRetrieve'),
    DataList: require('./DataList'),
    DataRemove: require('./DataRemove'),

    //Mixer Commands
    ChannelGrid: require('./ChannelGrid'),

    //Thumbnail Commands
    ThumbnailList: require('./ThumbnailList'),
    ThumbnailRetrieve: require('./ThumbnailRetrieve'),
    ThumbnailGenerate: require('./ThumbnailGenerate'),
    ThumbnailGenerateAll: require('./ThumbnailGenerateAll'),

    //Template Graphics Commands
    CGRemove: require('./CGRemove'),
    CGClear: require('./CGClear'),

    //Quary Commands
    Cinf: require('./Cinf'),
    Cls: require('./Cls'),
    Tls: require('./Tls'),
    Version: require('./Version'),
    Info: require('./Info'),
    Diag: require('./Diag'),
    Bye: require('./Bye'),
    Kill: require('./Kill'),
    Restart: require('./Restart')
};