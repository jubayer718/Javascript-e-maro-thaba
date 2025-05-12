// function process(data, callback) {
//   console.log("processing user data", data);
//   callback();
// }
// function fetch(callback) {
//   const user = { id: 1, name: 'Jubaer' };
//   callback(user)
// }
// fetch((data => {
//   process(data, () => {
//     console.log('user data processing successful');
//   })
// }))

function process(data, callback) {
  console.log("user data is: ", data);
  callback();

}

function fetch(callback) {
  const user = { id: 1, name: 'jubayer' };
  callback(user)
}

fetch(data => {
  process(data, () => {
    console.log("user data processing successful");
  })
})

const greetings = (callback) => {
 
  callback()
}
const morningGreetings = () => {
   console.log('Good Morning');
}
greetings(morningGreetings);

const func = (callback) => {
  callback()
}
const objFn = () => {
  const obj = {
    id: 1, name: 'jubayer', address: 'magura,Dhaka'
  }
  console.log(Object.keys(obj));
};
func(objFn)

function numberProcessor(num, callback) {
  const result = num / 5;
  callback(result)
}
function getResult(value) {
  console.log("Result is:", value);
}
numberProcessor(5124, getResult)

function greetings2(greetingHandler) {

  greetingHandler();
  
}

function morning() {

  console.log("Good Morning");

}

greetings2(morning);


