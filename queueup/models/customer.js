class Customer {
  static priorities = ["normal", "senior", "pregnant", "disabled"];

  constructor(name, phone, priority = Customer.priorities[0]) {
    this.name = name;
    this.phone = phone;
    this.priority = priority;
  }

  set priority(value) {
    if (typeof value !== "string") {
      throw new Error("Priority must be string");
    }
    const lowerValue = value.toLowerCase();

    if (Customer.priorities.includes(lowerValue)) {
      this._priority = lowerValue;
    } else {
      throw new Error(
        `Priority must include ${Customer.priorities.join(", ")}`,
      );
    }
  }
  get priority() {
    return this._priority;
  }
}

const customerOne = new Customer("ade", "09061118351", "disabled");

module.exports = Customer;
