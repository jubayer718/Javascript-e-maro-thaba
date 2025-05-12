const creator = {
  name: 'jhon',
  
   greet: ()=>{
    console.log(`Hello ${this.name}`);
  }


}
creator.greet();