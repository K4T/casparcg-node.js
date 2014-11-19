var DataRetrieve = function(name) {

    var command = 'DATA RETRIEVE ';

    command += '\"' + name + '\"';

    return command;
};

module.exports = DataRetrieve;