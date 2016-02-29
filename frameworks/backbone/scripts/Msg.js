var Msg = Backbone.View.extend({
    initialize: function(options){
        options.chatContainer.innerHTML += "<p>" + options.text + "</p>";
    }
});