let price = 3001;
if (price > 3000) {
  console.log('cashback 500');
} else {
  console.log("cashback 0");
}



let cashback = price>3000 ? 500 : 0;
console.log(cashback);

const age = 41;
age > 15 ? console.log("Teen ager") : console.log("child");

const isLoggedIn = false;
isLoggedIn ? console.log("Welcome back") : console.log("please loggedIn");

const sunny = false;
!sunny ? console.log('stay home'):console.log('go outside');