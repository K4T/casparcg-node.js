var Version = function(component) {

    var command = 'VERSION ';

    command += (component || '');

    return command.trim();
};

module.exports = Version;