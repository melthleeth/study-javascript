const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) score += 25;
  });

  //   console.log(score);
  // scroll을 top으로 위치시키려면?!
  scrollTo(0, 0);

  result.classList.remove("d-none");
  //   result.querySelector("span").textContent = `${score}%`;

  // animating score
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) clearInterval();
    else output++;
  }, 20);
});

// windwo object (global object)
// console.log('hello');
// window.console.log('hello'); // 같은 코드

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// alert("hello");
// window.alert("hello");

// setTimeout(() => {
//   alert("hello, ninjas");
// }, 3000);
