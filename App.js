const correctAn = ["A", "A", "A", "B", "B"];
const form = document.querySelector(".quiz-form");
const Result = document.querySelector(".Quiz-result");
const NewQue = document.querySelector(".NewQuestioBtn");
let score = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userAnswer = [
    form.Q1.value,
    form.Q2.value,
    form.Q3.value,
    form.Q4.value,
    form.Q5.value,
  ];
  userAnswer.forEach((answer, index) => {
    if (answer === correctAn[index]) score += 20;
  });
  scrollTo(0, 0);
  
  let output = 0;
  const timer = setInterval(() => {
    Result.querySelector("span").innerText = `${output}%`;
    if (output === score) {
      clearInterval(timer)
    }
    else {
      output++;
    }

  },10000);
});

// function ResetAll() {
//   Result.querySelector("span").innerText = `0%`;
// }
// NewQue.addEventListener("click", (e) => {
//   e.preventDefault();
//   const Modal = document.querySelector(".Modal-container");
  
// });
