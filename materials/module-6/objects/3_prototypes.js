const employee = {
  title: 'default title',
  getTitle: function() {
    return console.log(this.title);
  }
};

employee.sayHello();
employee.toString();
employee.getTitle();
const peter = Object.create(employee);

/**
 * Set a prototype to the existing object
 * Object.setPrototypeOf(helen, employee);
 */