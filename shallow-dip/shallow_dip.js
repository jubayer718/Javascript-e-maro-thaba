//shallow copy

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
obj2.b.c = 5;
console.log(obj1.b.c);

// dip copy

const obj = { a: 1, b: { c: 2 } };
const obj3 = JSON.parse(JSON.stringify(obj));
obj3.b.c = 5;
console.log(obj3);