var DataRemove = function(name) {

    var command = 'DATA REMOVE ';

    command += '\"' + name + '\"';

    return command;
};

module.exports = DataRemove;