var seller_1  = Seller('max', 3);
var seller_2  = Seller('badhi-java', 3);

var check_1 = Check(seller_1);

check_1.add(Product('laptop', 1500));
check_1.add(Product('phone', 400));
check_1.add(Product('TV', 2000));

var check_2 = Check(seller_2);

check_2.add(Product('laptop', 1500));
check_2.add(Product('phone', 400));
check_2.add(Product('TV', 2000));

var check_3 = Check(seller_1);

check_3.add(Product('laptop', 1500));
check_3.add(Product('phone', 400));
check_3.add(Product('TV', 2000));

var checks = [
  check_1,
  check_2,
  check_3
];

var result = StatisticService.getEarnTotalBySeller(checks, seller_1);

if(result === 7800){
  console.log('OK');
}