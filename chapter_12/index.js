const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

getTodos("https://jsonplaceholder.typicode.com/todos", (err, data) => {
  console.log("callback fired");
  if (err) console.log(err);
  else console.log(data);
});

const getSomething = () => {
  return new Promise((resolve, reject) => {
    resolve("some data");
    // reject("some error");
  });
};

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
