var Chat = Backbone.View.extend({
    initialize: function(){
        document.body.innerHTML += '<div id="chat"></div>';
    },

    getEl: function(){
        return document.getElementById('chat');
    }
});

var chatInstance = new Chat();

var Msg = Backbone.View.extend({
    chatContainer: chatInstance.getEl(),

    initialize: function(options){
       this.chatContainer.innerHTML += "<p>" + options.text + "</p>";
    }
});

var msg1 = [
    new Msg({
        text: "hello"
    }),
    new Msg({
        text: "hi"
    }),
    new Msg({
        text: "how are you"
    }),
    new Msg({
        text: "norm"
    })
];