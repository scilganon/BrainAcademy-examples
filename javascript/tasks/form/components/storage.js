define(function(){
  return {
    load(num){
      return JSON.parse(localStorage.getItem(num));
    },
    save(num, data){
      localStorage.setItem(num, JSON.stringify(data));
    }
  };
});