// SO FAR WE ARE MAKING USE OF HTTPREQUEST
// THERE IS NEWER AND QUICKER WAY USING NATIVE FETCH API

fetch("todos/") //this thing returns a promise;thatswhy .then is applied
  .then((response) => {
    console.log("resolved", response); //RESPONSE IS OBJECT; CREATED BY FETCH
    return response.json(); //# also parses it and returns a PROMISE
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("rejected", err);
  });

//THE WAY FETCH API WORK IS THAT PROMISE IS ONLY REJECTED WHEN WE GET SOME KIND OF NETWORK ERROR;
//NOT FOR MISTYPING OF URL
//SO MAKE USE OF STATUS

//AS ...LINE 6....TO GET DATA ;USE JSON METHOD in line 7  #
