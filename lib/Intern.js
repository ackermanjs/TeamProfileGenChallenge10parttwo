const Employee = require('./EmployeeEmployee')

class Intern extends Employee {
    constructor(name, id, mail, edu) {
        super(name, id, mail);
        this.edu = edu;
    }

    getEdu() {
        return this.edu;
    }

    getPosition() {
        return `Intern`;
    }
}

module.exports = Intern;