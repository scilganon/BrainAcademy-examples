define([
    '/BrainAcademy-examples/node_modules/backbone/backbone.js',
    'scripts/HistoryModel'
], function(Backbone, HistoryModel){
    return Backbone.Collection.extend({
        url: 'http://localhost:8080',

        model: HistoryModel
    })
});