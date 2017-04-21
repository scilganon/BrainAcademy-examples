require([
    'scripts/Chat',
    'scripts/HistoryCollection',
    'scripts/Msg',
    'scripts/Router'
], function(Chat, HistoryCollection, Msg, Router){
    new Router();
    Backbone.history.start();

    var chatInstance = new Chat();

    var historyInstance = new HistoryCollection();

    function printMsgs(list){
        var container = chatInstance.getEl();

        container.innerHTML = '';

        list.forEach(function(model){
            var msg = new Msg({
                    model: model
                });


            container.innerHTML += msg.render();
        });
    }

    historyInstance.on('reset', printMsgs);

    historyInstance.fetch({
        reset: true
    });

    var searchInput = document.getElementById('search');
    searchInput.addEventListener('change', function(event){

        var searchText = event.currentTarget.value;

        historyInstance.forEach(function(model){
            var text = model.get('text');

            if(text.search(searchText) >= 0 && searchText){
                model.set('isSelected', true);
            } else {
                model.set('isSelected', false);
            }
        });

    });

    Backbone.on('filter', function(username){
        var filtered;

        if(username){
            filtered = historyInstance.filter(function(model){
                return model.get('author') === username;
            });
        } else {
            filtered = historyInstance.toArray();
        }

        printMsgs(filtered);
    });

});