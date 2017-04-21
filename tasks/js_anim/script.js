var men = document.getElementById('men');
var fps = 50;

men.addEventListener('click', handleBallMove);
men.addEventListener('click', handleMenMove);

function handleMenMove(){
    var i= 0;
    var timerId=setInterval(function(){
        men.style.left = --i + 'px';

    },1);

    setTimeout(function(){
        clearTimeout(timerId);
    },600);
}

function handleBallMove(){
    var start = new Date();

    var state = {
        position: 234,
        step: 1
    };

    var timerId = setInterval( function(){

        var duration = new Date() - start;

        if (duration >= 2000){
            clearInterval(timerId);
            return;
        }

        moveBall(state);

    }, 1000 / fps); //20
}

var position = 234;
var step1 =1;
var step =1;

function moveBall(state){

    ball.style.left = Math.floor(duration / 2.7) + 'px';

    var styles = getComputedStyle(ball);

    var isTopBorder = parseFloat(styles.top)>0;
    var isMiddleHorizontal = Math.floor(duration / 2.2)<380;

    if(isTopBorder && isMiddleHorizontal) {
        ball.style.top = position -step + 'px';
        step+=4;
    }else {
        ball.style.top =  step1+ 'px';
        step1+=4;
    }
}

