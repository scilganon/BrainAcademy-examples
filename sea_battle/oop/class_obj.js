  function User(name){
    this.name = name;
    this.profession = "developer";

    this.say = function(phrase){
      console.log("hmm..." + phrase);
    }

    this.greet = function(){
      this.say("Hello, my name is " + this.name);
    }
  }

  var user_1 = new User('max');

  // user_1.say("Hello, how are you?");