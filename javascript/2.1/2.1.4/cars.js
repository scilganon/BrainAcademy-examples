var car = {
    owner: 'max',
    model: 'ZAZ',
    volume: '5.0'
};

var carsList = [
    {
        owner: 'max',
        model: 'ZAZ',
        volume: 5
    },
    {
        owner: 'max',
        model: 'ZAZ',
        volume: 2
    },
    {
        owner: 'max',
        model: 'ZAZ',
        volume: 3
    }
];

console.log(carsList.reduce(function(result, item){
    if(result === null){
        return item;
    }

    return result.volume > item.volume ? item : result;
}, null));

var min = null;
for(var i=0; i<carsList.length; i++){
    min = carsList[i] < carsList[i-1] ? carsList[i] : carsList[i-1];
}