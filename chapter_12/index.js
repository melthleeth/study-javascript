const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
        // 이제 promise를 쓰니 더이상 parameter로 callback function 안써도 됨!
        // callback(undefined, data);
      } else if (request.readyState === 4) {
        // callback("could not fetch data", undefined);
        reject("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

const url = "https://jsonplaceholder.typicode.com/todos";
// getTodos("todos.json", (err, data) => {
//   console.log("callback fired");
//   if (err) console.log(err);
//   else console.log(data);
// });

// Callback Hell
// getTodos("todos/celena.json", (err, data) => {
//   console.log(data);
//   getTodos("todos/maggie.json", (err, data) => {
//     console.log(data);
//     getTodos("todos.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// Promise 버전
// getTodos("todos/celena.json")
//   .then((data) => {
//     console.log("promise resolved:", data);
//   })
//   .catch((err) => {
//     console.log("promise rejected", err);
//   });

// Resolve Callback Hell: Promise

const getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve("some data");
    // reject("some error");
  });
};

// reject시 err 부분을 수행한다.

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Chaining Promises
getTodos("todos/celena.json")
  .then((data) => {
    console.log("promise 1 resolved:", data);
    return getTodos("todos/maggie.json");
  })
  .then((data) => {
    console.log("promise 2 resolved:", data);
    return getTodos("todos.json");
  })
  .then((data) => {
    console.log("promise 3 resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected", err);
  });
