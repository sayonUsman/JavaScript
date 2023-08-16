// basic
const status = true;

console.log("Task 1 Done");

// promise definition
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (status) {
      resolve("Task 2 Done");
    } else {
      reject("Task 2 Failed");
    }
  }, 2000);
});

// promise call
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Task 3 Done");
