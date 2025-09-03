// ====================
// Part 2: Functions (Scope, Params, Return Values)
// ====================

// Global variable
let globalMultiplier = 2;

// Function with parameter + return value
function squareNumber(num) {
  // Local variable
  let result = num * num * globalMultiplier;
  return result;
}

// Another function: change text in DOM
function displayResult(message, elementId) {
  document.getElementById(elementId).textContent = message;
}

document.getElementById("calc-btn").addEventListener("click", () => {
  const number = 5;
  const squared = squareNumber(number);
  displayResult(`The square of ${number} (x2) is ${squared}`, "calc-result");
});

// ====================
// Part 3: JS + CSS Animations
// ====================
function triggerAnimation(elementId, animationClass) {
  const element = document.getElementById(elementId);
  
  // Remove animation class if already applied (so it can restart)
  element.classList.remove(animationClass);

  // Trigger reflow (forces DOM update)
  void element.offsetWidth;

  // Add animation class
  element.classList.add(animationClass);
}

document.getElementById("animate-btn").addEventListener("click", () => {
  triggerAnimation("js-box", "animate");
});
