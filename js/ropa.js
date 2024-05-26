$(document).ready(function(){
  $.get('http://fakestoreapi.com/products', function(data){
      $.each(data, function(i, item){
          var html = `
              <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                  <div class="card" style="width: 18rem;">
                      <img src="${item.image}" class="card-img-top img-fluid" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${item.title}</h5>
                          <h6 class="card-title">${item.category}</h6>
                          <p class="card-text">${item.description}</p>
                          <a href="#" class="btn btn-primary">Buscar en Amazon</a>
                      </div>
                  </div>
              </div>`;
          $('#recuadro-de-ropa').append(html);
      });
  });
});
