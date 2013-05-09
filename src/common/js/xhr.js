/// <reference path="kango.d.ts"/>
function xhr(url, object, success, error) {
    var details = {
        url: url,
        method: 'GET',
        async: false,
        contentType: 'json'
    };
    kango.xhr.send(details, function (data) {
        if(data.status == 200 && data.response != null) {
            var text = data.response;
            success.call(object, text);
        } else {
            // something went wrong
            error.call(object, data);
        }
    });
}
;
//@ sourceMappingURL=xhr.js.map
