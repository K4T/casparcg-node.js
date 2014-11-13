var Response = function() {
    var response,
        header,
        code,
        message;

    var parseReceivedData = function(data) {
        response = data.toString();

        var lines = response.split('\r\n');

        header = lines[0];
        code = header.split(' ')[0];

        lines.shift();
        message = lines.join('\r\n');
    };

    var getHeader = function() {
        return header;
    };

    var getCode = function() {
        return code;
    };

    var getMessage = function() {
        return message;
    };

    var getResponseLength = function() {
        return response.length;
    };

    var toString = function() {
        return 'Header: ' + header + '\r\nCode: ' + code + '\r\nMessage: ' + message + '\r\nResponse length: ' + getResponseLength() + 'b';
    };

    return {
        parseReceivedData: parseReceivedData,
        getHeader: getHeader,
        getCode: getCode,
        getMessage: getMessage,
        getResponseLength: getResponseLength,
        toString: toString
    }
};

module.exports = Response;
