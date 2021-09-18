const todos = [
  { text: "play mariokart", author: "shaun" },
  { text: "buy some milk", author: "mario" },
  { text: "drink water", author: "luigi" },
];

localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");
console.log(JSON.parse(stored));
