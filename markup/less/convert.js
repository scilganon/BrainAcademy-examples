var sprite = require('sprity');
sprite.create({
    style: 'style.less',
    processor: 'less'
}, function () {
    console.log('done');
});