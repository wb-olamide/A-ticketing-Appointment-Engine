const Customer = require("./customer.js");
const Ticket = require("./ticket.js");

const customerOne = new Customer("ade", "09061118351", "disabled");
const ticketOne = new Ticket("001", customerOne, "recharge");

console.log(customerOne);
console.log(ticketOne);
console.log(ticketOne.describe());
