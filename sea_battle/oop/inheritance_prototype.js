var alive_creature = {
  gDistance(){
    return 1;
  },
  gLocation(){
    return {
      x: 1,
      y: 1
    };
  }
};

var wolf = {
  gDistance(){
    return 10;
  },
  __proto__: alive_creature
};

alive_creature.gLocation();
wolf.gLocation();

//----

function AliveCreture(){
  this.gDistance = function(){
    return 1;
  }

  this.gLocation = function(){
    return {x:1, y:1}
  }
}


function Wolf(){
  this.gDistance = function(){
    return 10;
  }
}

Wolf.prototype = new AliveCreture();

var a = new AliveCreture();
var b = new Wolf()

a.gLocation();
b.gLocation();