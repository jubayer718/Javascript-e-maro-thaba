const Arr = [71, 72, 73, 74, 75, 76, 77, 78, 79];
const refrigerator = ['mango', 'orange', 'banana', 'guava', 'jackfruit'];
const bag = ['alu', 'begun', 'dharosh', 'moris', 'gajor', 'tometo', 'kumra', 'palong'];
console.log(bag.length);

const friends = ['sohan', 'shelim', 'ashik', 'milon', 'masum', 'nishan'];
console.log(friends);
console.log(friends[3]);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 num[7]=30;
console.log(num);

friends.push('rohim');
console.log(friends);
// friends.pop();
console.log(friends);
friends.pop();
console.log(friends);
friends.pop();
console.log(friends);

const fr = ['rohim', 'korim', 'jobbar', 'sofik'];
fr.unshift('salam');
console.log(fr);

const game = ['pubg', 'coverfire', 'tamplerun'];
game.shift('pubg');
console.log(game);

if (friends.includes('masum')) {
  console.log("I will buy briyani for you.");
} else {
  console.log("not");
}