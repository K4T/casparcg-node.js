var Response = function() {
    var response,
        header,
        code,
        body;

    var parseReceivedData = function(data) {
        response = data.toString();

        var lines = response.split('\r\n');

        header = lines[0];
        code = header.split(' ')[0];

        lines.shift();
        body = lines.join('\r\n');
    };

    var getHeader = function() {
        return header;
    };

    var getCode = function() {
        return parseInt(header.split(' ')[0]);
    };

    var getBody = function() {
        return body.trim();
    };

    var getResponse = function() {
        return response.trim();
    };

    var getResponseLength = function() {
        return response.length;
    };

    var toString = function() {
        return 'Header: ' + getHeader() + '\r\nCode: ' + getCode() + '\r\nBody: ' + getBody() + '\r\nResponse length: ' + getResponseLength() + 'b';
    };

    return {
        parseReceivedData: parseReceivedData,
        getHeader: getHeader,
        getCode: getCode,
        getBody: getBody,
        getResponse: getResponse,
        getResponseLength: getResponseLength,
        toString: toString
    }
};

module.exports = Response;
