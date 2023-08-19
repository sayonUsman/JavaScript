const takeOrder = (customer, callback) => {
  console.log(`Order has been taken for ${customer}.`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`Order is processing for ${customer}.`);

  setTimeout(() => {
    console.log("Cooking has been completed");
    console.log(`Order ready for ${customer}.`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`Order has been completed for ${customer}.`);
};

takeOrder("Customer 1", (customer) => {
  processOrder(customer, (customer) => {
    completeOrder(customer);
  });
});

console.log("Please wait");
