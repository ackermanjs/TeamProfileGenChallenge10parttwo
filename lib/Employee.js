class Employee {
    constructor(name, id, mail) {
        this.name = name;
        this.id = id;
        this.mail = mail;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getMail() {
        return this.mail;
    }

    getPosition() {
        return `Employee`;
    }
}

module.exports = Employee;