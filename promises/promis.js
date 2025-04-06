function fetch() {
  const user = { id: 1, namer: 'Jubayer' }
  return new Promise((resolve, reject) => { 
    if (user) {
      resolve(user)
    } else {
      reject("error fetching user data")
    }
  })
}
fetch()
  .then((data) => {
     console.log("Processing user data:", data);
        console.log("User data processed successfully.");
  }).catch (error=> {
  console.log("Error",error);
})