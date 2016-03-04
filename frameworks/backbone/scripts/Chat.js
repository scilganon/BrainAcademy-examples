define([
    '/BrainAcademy-examples/node_modules/backbone/backbone.js'
],function(Backbone){
    return Backbone.View.extend({

        initialize: function(){
            document.body.innerHTML += '<div id="chat"></div>';
        },

        getEl: function(){
            return document.getElementById('chat');
        }
    });
});