// Fetch api

// fetch("todos/maggie.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json(); // promise 객체이기 때문에 return 해주는 것!!!!!
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

// Async & Await
// async를 쓰는 순간 promise가 된다.

const getTodos2 = async () => {
  const response = await fetch("todos/celenas.json");
  //   console.log(response);

  // json 파일 자체에 문제가 있는게 아닌데 json에 문제가 발생했다 하므로 custom error throwing이 필요
  if (response.status !== 200) {
    throw new Error("cannot fetch the data");
  }
  const data = await response.json();
  return data;
};

// OHHHHH this is non-blocking

console.log(1);
console.log(2);
getTodos2()
  .then((data) => console.log("resolved", data))
  .catch((err) => console.log("rejected", err.message));
console.log(3);
console.log(4);
