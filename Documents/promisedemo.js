function register() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Register here");
      resolve();
    }, 1000);
  });
}

function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login here");
      resolve();
    }, 5000);
  });
}

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetch data");
      resolve();
    }, 4000);
  });
}

function displayData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Display data");
      console.log("Call Another Application");
      resolve();
    }, 6000);
  });
}

// Promise chaining
register()
  .then(() => login())
  .then(() => getData())
  .then(() => displayData())
  .catch((error) => {
    console.log("Error:", error);
  });
