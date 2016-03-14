define([
    '/BrainAcademy-examples/node_modules/backbone/backbone.js'
], function(Backbone){
    return Backbone.Router.extend({
        initialize: function(){
            console.log('created');
        },

        routes: {
            '': 'index',
            "history/:username": 'history'
        },

        history: function(username){
            Backbone.trigger('filter', username);
        },

        index: function(){
            console.log('index.page');
        }
    });
});