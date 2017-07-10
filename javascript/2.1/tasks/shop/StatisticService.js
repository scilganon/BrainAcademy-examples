var StatisticService = {
  getEarnTotalBySeller: function(list, seller){
    var result = 0;

    for(var i=0; i<list.length;i++){
      var check = list[i];

      if(check.seller === seller){
        result += check.sum();
      }
    }

    return result;
  },
  uniqueNamesInCheck(check){
    var uNames = [];

    for(var i=0; i< check.stack.length;i++){
      var product = check.stack[i];

      if(uNames.indexOf(product.name) === -1){
        uNames.push(product.name);
      }

    }

    return uNames.length;
  },

  getEarnForSellerByCheck(product, seller){
    return product.price / 100 * seller.salary.percent;
  },


};