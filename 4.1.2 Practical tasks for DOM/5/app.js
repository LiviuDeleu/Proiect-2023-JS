const decreaseBtn = document.getElementById("decrease-btn");
const inputField = document.getElementById("input-field");
const increaseBtn = document.getElementById("increase-btn");

decreaseBtn.addEventListener("click", function () {
  let currentValue = parseInt(inputField.value);
  if (currentValue > 0) {
    inputField.value = currentValue - 1;
  }
  if (inputField.value === "0") {
    decreaseBtn.disabled = true;
  }
  if (inputField.value !== "9") {
    increaseBtn.disabled = false;
  }
});

increaseBtn.addEventListener("click", function () {
  let currentValue = parseInt(inputField.value);
  if (currentValue < 9) {
    inputField.value = currentValue + 1;
  }
  if (inputField.value === "9") {
    increaseBtn.disabled = true;
  }
  if (inputField.value !== "0") {
    decreaseBtn.disabled = false;
  }
});

inputField.addEventListener("input", function () {
  let currentValue = parseInt(inputField.value);
  if (isNaN(currentValue) || currentValue < 0) {
    inputField.value = "0";
  } else if (currentValue > 9) {
    inputField.value = "9";
  }
  if (inputField.value === "0") {
    decreaseBtn.disabled = true;
  } else {
    decreaseBtn.disabled = false;
  }
  if (inputField.value === "9") {
    increaseBtn.disabled = true;
  } else {
    increaseBtn.disabled = false;
  }
});
