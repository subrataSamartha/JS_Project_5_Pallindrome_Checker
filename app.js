const inputEl = document.querySelector("[data-input]");
const outputEl = document.querySelector("[data-output]");
const bodyEl = document.getElementById("container");
const resetBtn = document.querySelector("[data-reset-btn]");
const submitBtn = document.querySelector("[data-submit-btn]");

const isPallendrum = () => {
  console.log("isPallendrum called");
  submitBtn.classList.add("cursor-not-allowed");
  resetBtn.classList.remove("cursor-not-allowed");
  const inputNum = inputEl.value;
  const revNum = inputNum.split("").reverse().join("");
  console.log(inputNum);
  if (inputNum == "") {
    outputEl.innerText = "Please enter a valid number in inputbox";
    return;
  }
  let isPallendnum = inputNum === revNum ? "" : "not ";
  let color = inputNum === revNum ? "green" : "red";
  if (isPallendnum == "not ") {
    bodyEl.classList.add("bg-red-100");
  } else {
    bodyEl.classList.add("bg-green-100");
  }
  bodyEl.classList.add(`bg-${color}-100`);
  outputEl.innerText = `${inputNum} is ${isPallendnum}a Pallindrum Number.`;
};

submitBtn.addEventListener("click", isPallendrum);

const reset = () => {
  outputEl.innerText = "Click on submit to check";
  submitBtn.classList.remove("cursor-not-allowed");
  resetBtn.classList.add("cursor-not-allowed");
  inputEl.value = "";
  if (bodyEl.classList.contains("bg-red-100")) {
    bodyEl.classList.remove("bg-red-100").add("bg-white");
  }
  if (bodyEl.classList.contains("bg-green-100")) {
    bodyEl.classList.remove("bg-green-100").add("bg-white");
  }
};
resetBtn.addEventListener("click", reset);
