var createId = function(start){
  return function(){
    return start++;
  };
};

var counter = createId(0);

function Seller(name, percent){
  return {
    id: counter(),
    type: 'seller',
    name: name,
    salary: {
      base: 100,
      percent: percent
    }
  };
}

// var seller = Seller('max', 1.5);

function Product(name, price){
  return {
    id: counter(),
    type: 'product',
    name: name,
    price: price
  };
}

// var product = Product('laptop', 1500);

function Check(seller){
  return {
    id: counter(),
    type: 'check',
    seller: seller,
    stack: [],
    add: function(product){
      if(product.type !== 'product'){
        throw new Error('not valid product');
      }

      this.stack.push(product);
    },
    sum: function(){
      var result = 0;

      for(var i=0; i< this.stack.length; i++){
        var product = this.stack[i];

        result += product.price;
      }

      return result;
    }
  };
}