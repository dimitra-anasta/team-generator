function internCard(intern){
    return `   <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text">Name: ${intern.name}</p>
        <p class="card-text">ID: ${intern.id}</p>
        <a href = "mailto: ${intern.email}" > Email</a>
        <p class="card-text">School: ${intern.school}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>`
 }


 module.exports = internCard;