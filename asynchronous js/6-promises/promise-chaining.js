const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("some error");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};
//   WE CAN CHAIN PROMISE,SO WE CAN PERFORM ONE ASYNCHRONOUS TASK AFTER OTHER IN ORDER
getTodos("todos/")
  .then((data) => {
    console.log("promise 1 resolved", data); //AS WE ALREADY GOT DATA
    return getTodos("todos/"); //THE WHOLE PARENT HAS BECOME A PROMISE (AS WE HAVE RETURNED)
  })
  .then((data) => {
    console.log("promise 2 resolved", data);
  })
  .catch((err) => {
    console.log("promise rejected", err);
  });
// GOOD THING ABOUT CATCH IS :IT CATCHES ALL ERROR;WE DONT HAVE TO REWRITE IT
// NOTICE THAT TRIANGLE OF DOOM NOT PRESENT ,WE DONT GET CALLBACK HELL
