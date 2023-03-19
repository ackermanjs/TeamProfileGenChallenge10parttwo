const Employee = require('./Employee')

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

modules.exports = Intern;