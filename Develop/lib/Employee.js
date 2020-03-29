// TODO: Write code to define and export the Employee class

//create Employee class
class Employee {
  // constructor function takes three parameters: name, id, email
  constructor (name, id, email) {
  this.name = name;
  this.id = id;
  this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// next two lines create var named employee, 
// and trigger constructor function and methods in Employee class
const employee = new Employee("John", 1001, "j@fakemail.com")
console.log(Employee);

//export Employee Class
module.exports = Employee;