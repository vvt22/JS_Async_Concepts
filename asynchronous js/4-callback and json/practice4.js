// const getTodos = () => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       console.log(request, request.responseText);
//     } else if (request.readyState === 4) {
//       console.log("could not fetch data");
//     }
//   });
//   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//   request.send();
// };

// getTodos();

// it would be nicer if we made use of callbacks
// so
const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("could not fetch", undefined);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};
console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log("callback fired ");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log(3);
console.log(4);

// USING JSON DATA
// USING JSON DATA
// USING JSON DATA
// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         data=JSON.parse(request.responseText)

//         //json parse will convert into js objectss    json must always be in double qoutes

//         callback(undefined, data);
//       } else if (request.readyState === 4) {
//         callback("could not fetch", undefined);
//       }
//     });
//     request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//     request.send();
//   };
//   console.log(1);
//   console.log(2);

//   getTodos((err, data) => {
//     console.log("callback fired ");
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   });
//   console.log(3);
//   console.log(4);
