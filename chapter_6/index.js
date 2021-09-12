// const title = document.querySelector("h1");
const title = document.querySelector(".title");
// title.setAttribute("style", "margin: 50px;");
console.log(title.style);
console.log(title.style.color);

title.style.margin = "50px";
title.style.color = "crimson";
title.style.fontSize = "60px";
title.style.fontFamily = "Roboto";
title.style.margin = "";

const content = document.querySelector("p");
console.log(content.classList);
content.classList.add("error");
content.classList.remove("error");
// content.classList.add("success");

const paras = document.querySelectorAll("p");
console.log(paras);
paras.forEach((p) => {
  console.log(p.textContent);
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
  if (p.innerText.includes("success")) {
    p.classList.add("success");
  }
});

title.classList.toggle("test");

const article = document.querySelector("article");
// console.log(article.children);
// console.log(Array.from(article.children));
Array.from(article.children).forEach((child) => {
  child.classList.add("article-element");
});

const title2 = document.querySelector("h2");
console.log(title2.parentElement);
console.log(title2.parentElement.parentElement);
console.log(title2.nextElementSibling);
console.log(title2.previousElementSibling);
console.log(title2.nextElementSibling.parentElement.children);

// Add Event
const ul = document.querySelector("ul");
// ul.remove();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  //   console.log("you clicked me");
  const li = document.createElement("li");
  li.textContent = "Something new to do";
  //   ul.append(li);
  ul.prepend(li);
});

/*
const items = document.querySelectorAll("li");
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log("item clicked");
    // console.log(e);
    // 둘 다 같음
    // console.log(e.target);
    // console.log(item);
    // e.target.style.textDecoration = "line-through";
    console.log("event in li");
    e.stopPropagation(); // event bubbling을 막아줌
    e.target.remove();
  });
});
*/

// event delegation: 불필요하게 일일이 li에 eventListener 다는 동작을 줄여줌
ul.addEventListener("click", (e) => {
  //   console.log("event in ul");
  //   console.log(e.target);
  if (e.target.tagName === "LI") e.target.remove();
});

const copy = document.querySelector(".copy-me");
copy.addEventListener("copy", () => {
  console.log("OI! my content is copyright"); // 신기하군! ㅋㅋㅋ
});

const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  //   console.log(e);
  //   console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX} y pos - ${e.offsetY}`;
});

document.addEventListener("wheel", (e) => {
  console.log(e.pageX, e.pageY);
});

// popup
const button2 = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");

button2.addEventListener("click", () => {
  popup.style.display = "block";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});
