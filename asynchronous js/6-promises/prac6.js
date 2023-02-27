// PROMISES EXAMPLE
// FIRST THING IS ALWAYS RETURN A NEW PROMISES
// IT BASICALLY TAKES SOME TIME TO DO AND LEAD TO EITHER ONE OF RESOLVED or REJECTED
// THIS ALSO TAKE A CALLBACK FNs HAVING ARGUMENT(resolve,reject(already built))

const getSomething = () => {
  return new Promise(
    (
      resolve,
      reject //Line 4
    ) => {
      //fetch something
      resolve("some data");
      reject("some error");
    }
  ); //Line 2
};

// getSomething().then((data) =>{
//     console.log(data);                //first callback fns fires when resolved
// },(err)=>{
//     console.log(err);                 //second callback arg fires when rejected
// });

// another way for above one
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
