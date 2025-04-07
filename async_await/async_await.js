async function fetch() {
  const user = { id: 1, name: 'Jubayer' };

  // return new Promise((resolve) => {
  //   resolve(user);
  // })
  return user;
}
async function process() {
  try {
    const data = await fetch();
    console.log("Processing user data", data);
    console.log("Processing user data successful");
  } catch (error) {
    console.log('Error',error);
  }
}
process()


function createCount() {
  let count = 0;
  return function () {
    count++
    return count
  }
}
const counter = createCount();
console.log(counter());

for (let i = 0; i < 10; i++){
  console.log(counter());
}