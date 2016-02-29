
var chatInstance = new Chat();

var historyInstance = new HistoryModel();

historyInstance.fetch();

historyInstance.on('change', function(list){
    for(var key in list.attributes){
        new Msg({
            text: list.attributes[key],
            chatContainer: chatInstance.getEl()
        });
    }
});