const createManagerCard = (manager) => {
  return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Position: Manager</h6>
      <h6 class="card-subtitle mb-2 text-muted">EMPLOYEE-ID: ${manager.id}</h6>
      <h6 class="card-subtitle mb-2 text-muted">E-MAIL ADDRESS: ${manager.mail}</h6>
      <h6 class="card-subtitle mb-2 text-muted">MANAGER OFFICE NUMBER: ${manager.contact}</h6>
    </div>
  </div>`;
};
const createEngineerCard = (engineer) => {
  return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Position: Engineer</h6>
      <h6 class="card-subtitle mb-2 text-muted">EMPLOYEE ID: ${engineer.id}</h6>
      <h6 class="card-subtitle mb-2 text-muted">E-MAIL ADDRESS: ${engineer.mail}</h6>
      <h6 class="card-subtitle mb-2 text-muted">GITHUB URL: ${engineer.hub}</h6>
    </div>
  </div>`;
};
const createInternCard = (intern) => {
  return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Position: Intern</h6>
      <h6 class="card-subtitle mb-2 text-muted">EMPLOYEE ID: ${intern.id}</h6>
      <h6 class="card-subtitle mb-2 text-muted">E-MAIL ADDRESS: ${intern.mail}</h6>
      <h6 class="card-subtitle mb-2 text-muted">SCHOOL: ${intern.edu}</h6>
    </div>
  </div>`;
};

module.exports = createManagerCard;
module.exports = createEngineerCard;
module.exports = createInternCard;
