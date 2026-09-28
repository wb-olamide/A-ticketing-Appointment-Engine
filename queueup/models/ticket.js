// ticket.js: a Ticket class with number (e.g. "A042"), customer, service (string), issuedAt (timestamp), status ("waiting" | "serving" | "served" | "cancelled"), served

import Customer from "./customer.js";

class Ticket {
  static statuses = ["waiting", "serving", "served", "cancelled"];
  constructor(
    number,
    customer = Customer,
    service,
    status = Ticket.statuses[0],
  ) {
    this.number = number;
    this.customer = customer;
    this.service = service;
    this.issuedAt = new Date();
    this.status = status;
    this.servedAt = null;
  }

  set status(value) {
    if (typeof value !== "string") {
      throw new Error("Value should be string");
    }
    const lowerValue = value.toLowerCase();
    if (Ticket.statuses.includes(lowerValue)) {
      this._status = lowerValue;
      console.log(`Status set as ${lowerValue}`);
    } else {
      throw new Error(`Value should include ${Ticket.statuses.join(", ")}`);
    }
  }

  describe() {
    return `${this.number} - ${this.customer.name}(${this.customer.priority}) - ${this.service} - waiting since${this.issuedAt.toLocaleTimeString()}`;
  }
}
const Ticket1 = new Ticket("001", "Olamide", "recharge");
