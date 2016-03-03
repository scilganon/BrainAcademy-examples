var Msg = Backbone.View.extend({
    options: null,

    initialize: function(options){
        this.options = options;
    },

    render: function(){
        var model = this.options.model,
            text = model.get('text'),
            author = model.get('author');

        return ">"+author + ": " + text + "<br />";
    }
});