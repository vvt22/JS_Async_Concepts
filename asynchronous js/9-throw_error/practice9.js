//as we know that fetch will get resolved even if we misprintted the url
//so throw our own error
//if there is error in json then we can use catch

const getTodos = async () => {
  const response = await fetch("todos/");

  if (response.status !== 200) {
    throw new Error("cannot fetch data"); // as we throw error the promise will be rejected
  }
  const data = await response.json();
  return data;
};
getTodos()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected", err.message));
