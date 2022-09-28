function engineerCard(engineer){
    return `   <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text">Name: ${engineer.name}</p>
        <p class="card-text">ID: ${engineer.id}</p>
        <a href = "mailto: ${engineer.email}" > Email</a>
        <a href = "https://github.com/${engineer.github}"> Github Profile</a>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>`
 }


 module.exports = engineerCard;