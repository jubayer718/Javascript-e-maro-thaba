function process(data, callback) {
  console.log("processing user data", data);
  callback();
}
function fetch(callback) {
  const user = { id: 1, name: 'Jubaer' };
  callback(user)
}
fetch((data => {
  process(data, () => {
    console.log('user data processing successful');
  })
}))