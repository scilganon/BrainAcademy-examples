define([
  './components/progress/script.js'
], function(Progress){
  function getBtnText(step){
    return step === (steps.length -1)
      ? 'finish'
      : 'next';
  }

  function form_init(steps){
      var currentStep = 0;

      function renderStep(step){
        document.querySelector('#step').src = steps[step];
        document.querySelector('button').innerText = getBtnText(step);
      }

      return  {
        //for replacement
        onChange: function(){},

        setStep: function(num){
          renderStep(num);
          this.onChange(num);
        },

        render: function(){
          var that = this;

          document.querySelector('button').addEventListener('click', function(){
            if(currentStep === (steps.length -1)){
              return console.log('finish');
            }

            currentStep++;

            renderStep(currentStep);
            that.onChange(currentStep);
          });

          renderStep(currentStep);
        }
      };
    }

  var steps = [
    "./steps/step_1/index.html",
    "./steps/step_2/index.html"
  ];
  var progressEl = document.querySelector('.progress');

  var form = form_init(steps);
  var progress =  Progress.init(progressEl, {
    count: steps.length
  });

  progress.onChange = function(step){
    form.setStep(step)
  };

  form.onChange = function(step){
    progress.setStep(step);
  };

  progress.render();
  form.render();
});