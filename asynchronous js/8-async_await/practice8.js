//usage of async and await-chain promises in cleaner way
//ASYNC=ITS BUNDLED ALL ASYNCHRONOUS CODE;NON BLOCKING;

// fetch("todos/")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

//first of all create a function which is going to contain all asynchronous code
//this is an ordinary fn
//so add async keyword in front of paranthesis

// WHENEVER WE CALL ASYNC IT WILL ALWAYS RETURN A PROMISE
// const getTodos=async()=>{};
// const test=getTodos();
// console.log(test);                  // it is a promise

const getTodos = async () => {
  const response = await fetch("todos/");
  const data = await response.json();
  console.log(data);
  return data;
  //DO THIS FETCH AND RETURN A PROMISE AND AWAIT STOPS THE JS
  //UNTIL THE FETCH IS RESOLVED
  //ONCE RESOLVED WE CAN TAKE THAT VALUE AND ASSIGN TO VARIABLE
  //STOPPING DOESNT MEAN BLOCKING THE CODE AS WE'RE CALLING FROM ASYNC FNS WHICH ITSELF IS NOT BLOCKING
  // console.log(response);   //we can get the response object
};
console.log(1);
getTodos().then((data) => console.log("resolved", data)); //as the whole async fn. returns a promise
console.log(2);
//the power of await is we can chain many different things
//we'd be waiting for one promise to resolve before assigning,then another and so on

// const getTodos = async () => {
//     const response = await fetch("todos/a");
//     const data = await response.json();
//     const response = await fetch("todos/b");
//     const data = await response.json();
//     const response = await fetch("todos/c");
//     const data = await response.json();
// };
// getTodos();
