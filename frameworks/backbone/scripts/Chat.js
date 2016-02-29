var Chat = Backbone.View.extend({
    initialize: function(){
        document.body.innerHTML += '<div id="chat"></div>';
    },

    getEl: function(){
        return document.getElementById('chat');
    }
});