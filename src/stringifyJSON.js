// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    var result = '';

    if (typeof obj === 'string') {
        result = result.concat('"', String(obj), '"');
    } else if (typeof obj === 'number' ||
        typeof obj === 'boolean' ||
        obj === null) {
        result = result.concat(String(obj));
    } else if (typeof obj === 'function' || typeof obj == 'undefined') {
        //do nothing
    } else if (Array.isArray(obj)) {
        result = result.concat('[');
        for (var i = 0; i < obj.length; i++) {
            result = result.concat(stringifyJSON(obj[i]), ',');
        }
        if (result !== '[') { result = result.substring(0, result.length - 1); }
        result = result.concat(']');
    } else if (typeof obj === 'object') {
        result = result.concat('{');
        for (var k in obj) {
            if (typeof obj[k] !== 'function' && typeof obj[k] !== 'undefined') {
                result = result.concat('"', String(k), '"', ':', stringifyJSON(obj[k]), ',');
            }
        }
        if (result !== '{') { result = result.substring(0, result.length - 1); }
        result = result.concat('}');
    }

    return result;
};
