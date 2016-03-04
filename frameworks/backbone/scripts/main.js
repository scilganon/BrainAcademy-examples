require([
    'scripts/Chat',
    'scripts/HistoryCollection',
    'scripts/Msg'
], function(Chat, HistoryCollection, Msg){

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

});