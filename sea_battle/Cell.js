define(function () {
  return  function Cell(x,y){
    this.x = x;
    this.y = y;

    this.isShot = false;
    this.isFilled =false;
    this.isReserved =false;


    this.isHit = function(){
      return this.isFilled && this.isShot;
    }

    this.getCls = function(){
      if(!this.isFilled && !this.isShot && this.isReserved){
        return 'blue';
      }

      if (!this.isFilled){
        return !this.isShot
          ? 'white'
          : 'grey';
      }

      return this.isShot
        ? 'red'
        : 'black';
    }
  };
});