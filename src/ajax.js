(function () {
    window.$ajax = {
        createRequest: function (method, url, onSuccessCallback, onFailedCallback) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    onSuccessCallback(xhr.responseText);
                } else if (typeof onFailedCallback === 'function') {
                    onFailedCallback(xhr.responseText);
                }
            };
            xhr.open(method, 'https://cors-anywhere.herokuapp.com/' + url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            return xhr;
        },
        get: function (url, onSuccessCallback, onFailedCallback) {
            var request = this.createRequest('GET', url, onSuccessCallback, onFailedCallback);
            request.send();
        },
        post: function (url, payload, onSuccessCallback, onFailedCallback) {
            var request = this.createRequest('POST', url, onSuccessCallback, onFailedCallback);
            request.send(payload);
        }
    };
})();