console.log(1);

require(['./js/module.js'], function(){
    console.log('sub module loaded')
});