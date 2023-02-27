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

getTodos("todos/")
  .then((data) => {
    console.log("promise resolved", data);
  })
  .catch((err) => {
    console.log("promise rejected", err);
  });
