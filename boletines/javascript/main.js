/*console.log("Hola desde un archivo externo de Javascrit");*/

// DOM let creo una variable
//querySelector devuelve un solo elemento el elemento aunte haya mas de uno
//querySelectorall devuelve tods los elementos
/*let links = document.querySelectorAll("a");

links.forEach(function(link){
  console.log(link);
});*/

/*let celdas = document.querySelectorAll("td");

celdas.forEach(function(td) {
  td.addEventListener('click', function() {
    console.log(this);
  })
});*/

///Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
//Recorrerlos
links.forEach(function(link) {
  //Agregar un evento click a cada uno de ellos
  link.addEventListener("click",function(ev) {
    ev.preventDefault();

    let content = document.querySelector('.content');

    //quitarle las clases de animacion q ya tiene
      content.classList.remove("fadeInDown");
      content.classList.remove("animated");

    //agregar clase para animar la salida
      content.classList.add("fadeOutUp");
      content.classList.add("animated");

      setTimeout(function() {
        location.href = "/";
      },600);


    return false;
  });
});
