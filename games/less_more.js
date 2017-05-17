var stored = Math.round((Math.random()*100));

console.log(stored);

for(var isRight = false; isRight !== true; ){
    var fromUser = prompt("how much");
    var substr = Math.abs(+fromUser - stored);

    if(fromUser === 'exit'){
        isRight = true;
    }

    if(stored === +fromUser){
        console.log("угадал");
        isRight = true;
    } else if(substr < 10){
        console.log("близко");
    } else if (substr < 20) {
        console.log("не близко");
    } else if (substr < 30) {
        console.log("далеко");
    } else if (substr < 40) {
        console.log("очень далеко");
    } else {
        console.log("ваще мимо");
    }
}1
