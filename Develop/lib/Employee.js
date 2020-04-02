// Create employee class for the manager, intern and engineer will extend from
class Employee {
  // Constructor has three fields, name, id, email
  // Set key/value pairs
  constructor(name, id, email){
      this.name = name;
      this.id = id;
      this.email = email
  }
  // Function to return the name
  getName(){
      return this.name;
  }
  // Function to return the id
  getId(){
      return this.id;
  }
  // Function to return the email
  getEmail(){
      return this.email;
  }
  // Function to return 'Employee
  getRole(){
      return 'Employee';
  }
}

module.exports = Employee;