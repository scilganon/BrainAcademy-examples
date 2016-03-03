var Msg = Backbone.View.extend({
    options: null,

    initialize: function(options){
        this.options = options;

        var model = this.model;

        this.options.model.on('change', function(){
            var el = document.getElementById(model.cid);

            if(model.get('isSelected')){
                el.style.backgroundColor = "red";
            } else {
                el.style.backgroundColor = '';
            }
        });
    },

    render: function(){
        var model = this.options.model,
            text = model.get('text'),
            author = model.get('author');

        return "<p id='" + model.cid + "'>>"+author + ": " + text + "</p>";
    }
});