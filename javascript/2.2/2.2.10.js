function readCookie(key) {
    var map = document.cookie.split(";").reduce(function (store, item) {
        var parts = item.split('=');
        store[parts[0]] = parts[1];
        return store;
    }, {});

    return map[key];
}