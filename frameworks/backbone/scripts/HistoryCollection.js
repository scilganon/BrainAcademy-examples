define([
    '/BrainAcademy-examples/node_modules/backbone/backbone.js',
    'scripts/HistoryModel'
], function(Backbone, HistoryModel){
    return Backbone.Collection.extend({
        url: './data/history.json',

        model: HistoryModel
    })
});