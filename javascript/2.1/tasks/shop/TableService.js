var TableService = {
  getEarnPerCheck(list){
    var rows = [];

    for(var i=0; i<list.length; i++){
      var check = list[i];

      for(var j=0;j<check.stack.length;j++){
        var product = check.stack[j];

        rows.push([
          check.id,
          product.name,
          check.seller.name,
          StatisticService.getEarnForSellerByCheck(product, check.seller)
        ]);
      }
    }

    return rows;
  },

  getTotalSoldProductsBySeller(list){
    var total = {};

    var sellers = {};

    for(var i=0;i<list.length;i++){
      var check = list[i];

      if(total[check.seller.id] === undefined){
        total[check.seller.id] = check.stack.length;
        sellers[check.seller.id] = check.seller;
      } else {
        total[check.seller.id] += check.stack.length;
      }

    }

    var rows = [];

    for(var id in total){
      rows.push([
        sellers[id].name,
        total[id]
      ]);
    }

    return rows;
  }
};