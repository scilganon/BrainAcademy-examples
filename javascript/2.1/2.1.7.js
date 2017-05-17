var weekDayNames = [
        "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
    ],
    date = new Date();

alert(weekDayNames[date.getDay()]);


location
    .search
    .substring(1)
    .split('&')
    .reduce(function (store, pair) {
    var tmp = pair.split('=');
    store[tmp[0]] = tmp[1];
    return store
}, {});