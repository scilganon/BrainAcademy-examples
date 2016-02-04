var resultCollection = [1,2,3,4,5];
    resultBlock = document.getElementById('result');

resultBlock.innerHTML += resultCollection.reduce(function(result, value){
    return result + value;
}, '');