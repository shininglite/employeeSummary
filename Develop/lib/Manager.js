// Require Employee class
const Employee = require('./Employee')

// Create manager class that extends the employee class
class Manager extends Employee {
    // Constructor has the same fields as the employee as well as an office number
    constructor(name, id, email, officeNumber){
        // Set the key/value pairs of the manager that come from the employee
        super(name, id, email)
        // Set the key/value pair specific to this manager (officeNumber)
        this.officeNumber = officeNumber;
    }
    // Method that returns 'Manage'
    getRole(){
        return 'Manager';
    }
    // Method that returns the officeNumber
    getOfficeNumber(){
        return this.officeNumber;
    }
}

// Export the Manager class
module.exports = Manager;