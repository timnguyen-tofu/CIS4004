let counterValue = 0;

//  Counter functions

function updateCounterOnPage() {
  let counterSpan = document.getElementById("counter");
  counterSpan.innerText = counterValue;
}

function tickUp() {
  counterValue = counterValue + 1;
  updateCounterOnPage();
}

function tickDown() {
  counterValue = counterValue - 1;
  updateCounterOnPage();
}

// For Loop
function runForLoop() {
  let output = "";
  let resultSpan = document.getElementById("forLoopResult");

  for (let i = 0; i <= counterValue; i = i + 1) {
    if (i === counterValue) {
      output = output + i;
    } else {
      output = output + i + ", ";
    }
  }

  resultSpan.innerText = output;
}

// Show all odd numbers from 1 to the counter
function showOddNumbers() {
  let output = "";
  let resultSpan = document.getElementById("oddNumberResult");
  let firstOne = true;

  for (let i = 1; i <= counterValue; i = i + 1) {
    if (i % 2 === 1) {
      if (firstOne === true) {
        output = output + i;
        firstOne = false;
      } else {
        output = output + ", " + i;
      }
    }
  }

  resultSpan.innerText = output;
}

// Array
function addMultiplesToArray() {
  let multiples = [];

  if (counterValue < 5) {
    console.log(multiples);
    return;
  }

  for (let i = counterValue; i >= 5; i = i - 1) {
    if (i % 5 === 0) {
      multiples.push(i);
    }
  }
  console.log(multiples);
}

// read form fields and print an object to the console
function printCarObject() {
  let typeInput = document.getElementById("carType").value;
  let mpgInput = document.getElementById("carMPG").value;
  let colorInput = document.getElementById("carColor").value;

  let carObj = {
    cType: typeInput,
    cMPG: mpgInput,
    cColor: colorInput
  };

  console.log(carObj);
}

// load one of the car objects from the footer into the form
function loadCar(whichCar) {
  let chosenCar;

  if (whichCar === 1) {
    chosenCar = carObject1;
  } else if (whichCar === 2) {
    chosenCar = carObject2;
  } else if (whichCar === 3) {
    chosenCar = carObject3;
  }

  document.getElementById("carType").value = chosenCar.cType;
  document.getElementById("carMPG").value = chosenCar.cMPG;
  document.getElementById("carColor").value = chosenCar.cColor;
}

// change paragraph text color based on which button was clicked
function changeColor(colorChoice) {
  let p = document.getElementById("styleParagraph");

  if (colorChoice === 1) {
    p.style.color = "red";
  } else if (colorChoice === 2) {
    p.style.color = "green";
  } else if (colorChoice === 3) {
    p.style.color = "blue";
  }
}
updateCounterOnPage();