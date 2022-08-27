const products = [
    {
        name: 'Apple',
        image: './img/apple1.jpg', // modificar por la ruta donde guarden sus imagenes
        price: 200,
        quantity: 3,
    },
    {
        name: 'Asus',
        image: './img/computer.jpg', // modificar por la ruta donde guarden sus imagenes
        price: 500,
        quantity: 4,
    },
    {
        name: 'HP',
        image: './img/laptop.jpg', // modificar por la ruta donde guarden sus imagenes
        price: 100,
        quantity: 6,
    },
    {
        name: 'Apple',
        image: './img/laptop1.jpg', // modificar por la ruta donde guarden sus imagenes
        price: 320,
        quantity: 1,
    }
];

var listProducts = products.map(function(product){

    return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /></head><body> <div class="contenedor"> <div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+product.image+'"> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">'+"Nombre producto: "+''+product.name+'</span></div>'+'<div class="card-reveal"><span class="card-title grey-text text-darken-4">'+"Precio: "+''+product.price+' '+"Cantidad: "+' '+product.quantity+' '+"Total"+' '+(product.price*product.quantity)+'</span></div></div> </div> </div></body></html>'
 
    });
          
  document.getElementById("listProducts").innerHTML = listProducts;