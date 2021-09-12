const form = document.querySelector(".signup-form");
// const username = document.querySelector("#username");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // default action이 페이지 refresh 시키는 것
  //   console.log(username.value);
  //   console.log(form.username.value); // id attribute가 지정되어있으면 바로 .으로 접근 가능!
  // validation
  const username = form.username.value;
  if (usernamePattern.test(username)) {
    // feedback good info
    feedback.textContent = "That username is valid!";
  } else {
    // feedback help info
    feedback.textContent =
      "username must contain letters only & be between 6 and 12";
  }
});

// regular expression
// https://regex101.com/

// const username = "meredith";
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// if (result) console.log("regex test passed :)");
// else console.log("regex test passed :(");

// let result = username.search(pattern); // search는 first position을 반환
// console.log(result);

// live feedback (keyboard event)
// validation 만족 못할땐 field 색을 빨간색으로 하고싶어!
form.username.addEventListener("keyup", (e) => {
  //   console.log(e.target.value, form.target.value);
  if (usernamePattern.test(e.target.value)) {
    //   console.log("passed");
    form.username.setAttribute("class", "success");
  } else {
    //   console.log("failed");
    form.username.setAttribute("class", "error");
  }
});
