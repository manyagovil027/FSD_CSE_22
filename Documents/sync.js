function register() {
  waitForDelay(1000);
  console.log("Register here");
}

function login() {
  waitForDelay(5000);
  console.log("Login here");
}

function getData() {
  waitForDelay(4000);
  console.log("Fetch data");
}

function displayData() {
  waitForDelay(6000);
  console.log("Display data");
}

function waitForDelay(delay) {
  const endTime = Date.now() + delay;

  while (Date.now() < endTime) {
    // Blocking delay
  }
}

register();
login();
getData();
displayData();

console.log("Call Another Application");
