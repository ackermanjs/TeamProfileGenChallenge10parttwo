const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, mail, hub) {
        super(name, id, mail);
        this.hub = hub;
    }

    getHub() {
        return this.hub;
    }

    getPosition() {
        return `Engineer`
    }
}

module.exports = Engineer;