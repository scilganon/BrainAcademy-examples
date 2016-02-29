var Msg = Backbone.View.extend({
    chatContainer: document.getElementById('chat'),

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