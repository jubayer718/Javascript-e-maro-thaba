const comeAfter6Pm = true;
if (comeAfter6Pm) {
  console.log('eat dinner');
} else {
  console.log('jhatar bari');
}

const login = true;
if (login) {
  console.log('welcome');
} else {
  console.log('get lost');
}

const run5Km = false;
if (run5Km) {
  console.log('I will buy chocolate for you');
} else {
  console.log('you will get fatty');
}

const mark = 80;
const myMark = 85;
if (mark < myMark) {
  console.log('you will got a bike');
}

const temperature = 23;
if (temperature >= 30) {
  console.log('moving ac');
} else {
  console.log('ghum with blanket');
}

//AND OR

const age = 18;
const height = 60;
if (age > 18 && height > 60) {
  console.log('will push the car');
} else {
  console.log('will ride the car');
}

const mathScore = 70;
const engScore = 90;
if (mathScore > 80 || engScore > 85) {
  console.log('you will admit into next process');
} else {
  console.log('I will merry you off');
}

const price = 4500;
if (price > 6000) {
  const discount = price / 100 * 15;
  const pay = price - discount;
  console.log(pay);
} else if (price > 3000) {
  const discount = price / 100 * 5;
  const pay = price - discount;
  console.log(pay)
} else {
  console.log('You need to pay full amount:', price);
}



const old = 45;
const foodPrice = 6000;
if (old < 12) {
  console.log("you don't need to pay for it");
} else if (old > 60) {
  const discount = foodPrice / 100 * 50;
  const pay = foodPrice - discount;
  console.log(pay);
} else {
  console.log('you have to pay full amount:', foodPrice);
}


const accBallance = 4900;
if (accBallance < 1000) {
  console.log('deposit cash');
} else if (accBallance >= 1000 && accBallance < 5000) {
  console.log('enjoy rich lifestyle');
} else {
  console.log('you are rich man so you marry me');
}

const marks = 79;
if (marks < 50) {
  console.log('fail');
} else if (marks >= 50 && marks < 80) {
  console.log('Pass');
} else {
  console.log('A+');
}


const temp = 20;

if (temp < 0) {
  console.log('ICE');
} else if (temp >= 0 && temp < 20) {
  console.log('Cool Cool');
} else {
  console.log('Hot Hot');
}


const isInvited = false;
const haveMoney = 100;

if (isInvited) {
  console.log("go to the party");

  if (isInvited) {
    console.log("Money in my pocket", haveMoney);
  }
  if (haveMoney > 1000) {
    console.log("I will give you a gift");
  } else {
    console.log("I don't give you gift");
  }
}
else {
  console.log("I will block my friend");
}