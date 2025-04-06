async function fetch() {
  const user = { id: 1, name: 'Jubayer' };
  
  return new Promise((resolve) => {
    resolve(user);
  })
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