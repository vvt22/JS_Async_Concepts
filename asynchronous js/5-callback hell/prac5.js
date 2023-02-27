// what if we have several files to get data IN TURN-First,then Next,then Next(on successfull)
// we want to wait to get first data on browser and so on

// THIS METHOD IS QUITE COMMAN WHEN WE REQUEST TO DIFFERENT APIs

const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch", undefined);
    }
  });
  request.open("GET", resource);
  request.send();
};
getTodos("todos/", (err, data) => {
  console.log(data);
  getTodos("todos/", (err, data) => {
    console.log(data);
    getTodos("todos/", (err, data) => {
      console.log(data);
    });
  });
});

// FROM ABOVE WE SEE THE CODE IS MESSY AND EVEN WE CAN THE TRIANGLE OF DOOM
// REPEATEDLY CALLING CALLBACKS IS CALLED AS CALLBACK HELL

// PROMISES CAN BE  MORE EFFICIENT FOR ABOVE ONE
