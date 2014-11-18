var DataStore = function(name, data) {

    var command = 'DATA STORE ';

    command += '\"' + name + '\"';
    command += ' \"' + data + '\"';

    return command;
};

module.exports = DataStore;