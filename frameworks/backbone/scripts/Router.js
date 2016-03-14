define([
    '/BrainAcademy-examples/node_modules/backbone/backbone.js'
], function(Backbone){
    return Backbone.Router.extend({
        initialize: function(){
            console.log('created');
        },

        routes: {
            '': 'index',
            "test/:param": 'test'
        },

        test: function(param){
            console.log();
            console.log(param);
        },

        index: function(){
            console.log('index.page');
        }
    });
});