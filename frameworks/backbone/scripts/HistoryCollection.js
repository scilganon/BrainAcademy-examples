var HistoryCollection = Backbone.Collection.extend({
    url: './data/history.json',

    model: HistoryModel
});