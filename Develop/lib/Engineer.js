// Refer to Manager comments
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        // github property instead of officeNumber
        this.github = github;
    }
    // Method to return 'Engineer'
    getRole(){
        return 'Engineer';
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer;