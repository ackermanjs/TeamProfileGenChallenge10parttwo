const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, mail, contact) {
        super(name, id, mail);
        this.contact = contact;
    }

    getPosition() {
        return `Manager`
    }
}

module.exports = Manager;
