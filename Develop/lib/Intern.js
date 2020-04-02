  
// Refer to Manager comments
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        // School property instead of officeNumber
        this.school = school;
    }
    // Method to return 'Intern'
    getRole(){
        return 'Intern';
    }
    getSchool(){
        return this.school
    }
}

module.exports = Intern;