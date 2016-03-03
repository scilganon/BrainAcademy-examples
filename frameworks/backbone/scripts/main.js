
var chatInstance = new Chat();

var historyInstance = new HistoryCollection();


historyInstance.on('reset', function(list){
    list.forEach(function(model){
        var msg = new Msg({
                model: model
            }),
            container = chatInstance.getEl();

        container.innerHTML += msg.render();
    });
});

historyInstance.fetch({
    reset: true
});
