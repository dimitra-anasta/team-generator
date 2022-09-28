function generateMarkdown(employees){
  allCards = ""
  for (let i = 0; i < employees.length; i++)
    if(employees[i].getRole() === "Manager"){
        allCards +=
 `   <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${employees[i].getRole()}</h5>
        <p class="card-text">Name: ${employees[i].getName()}</p>
        <p class="card-text">ID: ${employees[i].getId()}</p>
        <a href = "mailto: ${employees[i].getEmail()}" > Email</a>
        <p class="card-text">Office Number: ${employees[i].getOfficeNumber()}</p>
      </div>
    </div>
  </div>`
 } else if (employees[i].getRole() === "Engineer"){
  allCards +=
  `   <div class="col-sm-4">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${employees[i].getRole()}</h5>
      <p class="card-text">Name: ${employees[i].getName()}</p>
      <p class="card-text">ID: ${employees[i].getId()}</p>
      <a href = "mailto: ${employees[i].getEmail()}" > Email</a>
      <br>
      <a href = "https://github.com/${employees[i].getGithub()}"> Github Profile</a>
    </div>
  </div>
</div>`
 } else if (employees[i].getRole() === "Intern"){
    allCards +=
    `   <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${employees[i].getRole()}</h5>
        <p class="card-text">Name: ${employees[i].getName()}</p>
        <p class="card-text">ID: ${employees[i].getId()}</p>
        <a href = "mailto: ${employees[i].getEmail()}" > Email</a>
        <p class="card-text">School: ${employees[i].getSchool()}</p>
      </div>
    </div>
  </div>`
 }
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>My Team</title>

</head>
<body>
    <div class="jumbotron jumbotron-fluid bg-danger">
        <div class="container py-0 text-center">
          <h1 class="text-white">My Team</h1>
        </div>
      </div>
      <div class="row">
        ${allCards}
      </div>

</body>
</html>`
}

 module.exports = generateMarkdown;