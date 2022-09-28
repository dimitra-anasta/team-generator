function managerCard(manager){
    return `   <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Engineer</h5>
        <p class="card-text">Name: ${manager.name}</p>
        <p class="card-text">ID: ${manager.id}</p>
        <a href = "mailto: ${manager.email}" > Email</a>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>`
 }


 module.exports = managerCard;