// ticket.js: a Ticket class with number (e.g. "A042"), customer, service (string), issuedAt (timestamp), status ("waiting" | "serving" | "served" | "cancelled"), served
class Ticket {
  static statuses = ["waiting", "serving", "served", "cancelled"];
  constructor(
    number,
    customer = customer,
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
    } else {
      throw new Error(`Value should include ${Ticket.statuses.join(", ")}`);
    }
  }

  get status() {
    return this._status;
  }

  describe() {
    return `${this.number} - ${this.customer.name} (${this.customer.priority}) - ${this.service} - ${this.status} since ${this.issuedAt.toLocaleTimeString()}`;
  }
}
module.exports = Ticket;
