var check = Check(seller);

check.add(Product('laptop', 1500));
check.add(Product('laptop', 1500));
check.add(Product('phone', 400));
check.add(Product('TV', 2000));
check.add(Product('phone', 100));

var result = StatisticService.uniqueNamesInCheck(check);

if(result === 3){
  console.log('OK');
}