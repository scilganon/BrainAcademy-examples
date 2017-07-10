var seller  = Seller('max', 3);
var check = Check(seller);

check.add(Product('laptop', 1500));
check.add(Product('phone', 400));
check.add(Product('TV', 2000));

if(check.sum() === 3900){
  console.log('OK');
}