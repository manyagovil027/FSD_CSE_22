function register(cb) {
  setTimeout(() => {
    console.log("Register here");
    cb();
  }, 1000);
}

function login(cb) {
  setTimeout(() => {
    console.log("Login here");
    cb();
  }, 5000);
}

function getData(cb) {
  setTimeout(() => {
    console.log("Fetch data");
    cb();
  }, 4000);
}

function displayData() {
  setTimeout(() => {
    console.log("Display data");
    console.log("Call Another Application");
  }, 6000);
}

// Callback Hell problem
register(() => {
  login(() => {
    getData(() => {
      displayData();
    });
  });
});
