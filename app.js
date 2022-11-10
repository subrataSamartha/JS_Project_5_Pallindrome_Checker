const inputEl = document.querySelector("[data-input]");
const outputEl = document.querySelector("[data-output]");

const isPallendrum = () => {
  console.log(inputEl.value.split("").reverse().join(""));
  const inputNum = inputEl.value;
  const revNum = inputNum.split("").reverse().join("");

  let isPallendrum = inputNum === revNum ? "" : "not ";
  outputEl.innerText = `${inputNum} is ${isPallendrum}a Pallindrum Number.`;
};
