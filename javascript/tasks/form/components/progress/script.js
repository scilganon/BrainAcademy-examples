function handler(target){
    //reset state
    document.querySelector('.container .active').classList.remove('active');
    Array.from(document.querySelectorAll('.container .filled')).forEach(function(el){
        el.classList.remove('filled');
    });


    //set current state
    target.classList.add('active');
    var el = target.previousElementSibling;

    while(el){
        el.classList.add('filled');

        el = el.previousElementSibling;
    }
}

function runStep(num){
    var elOfActiveStep = document.querySelector(`.container .step:nth-child(${num + 1})`);

    handler(elOfActiveStep);
}

function render(stepCount, active, cb) {
    //render circles
    for (var i = 0; i < stepCount; i++) {
        var cls = i==active ? 'active' : '';

        document.querySelector('.container').innerHTML += `<div class="step ${cls}">${i + 1}</div>`
    }

    //
    document.querySelector('.container').addEventListener('click', function(event){
        console.log(event.target.innerText);

        cb(+event.target.innerText-1);
    })

    document.querySelector('.container').addEventListener('click', function(event){
        handler(event.target);
    })
}

function progress_init(parent, options){
    parent.innerHTML = '<div class="container"></div>';

    if(!options.count){
        throw new Error('settings should contain count of steps');
    }

    if(!options.active){
        options.active = 0;
    }

    return {
        //for replacement
        onChange: function(){},

        setStep: runStep,

        render: function(){
            render(options.count, options.active, this.onChange);
        }
    };
}