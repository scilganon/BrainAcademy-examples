
var chatInstance = new Chat();

var historyInstance = new HistoryCollection();


historyInstance.on('reset', function(list){
    //for(var key in list.attributes){
    //    new Msg({
    //        text: list.attributes[key],
    //        chatContainer: chatInstance.getEl()
    //    });
    //}
    console.log(list);
});

historyInstance.fetch({
    reset: true
});
