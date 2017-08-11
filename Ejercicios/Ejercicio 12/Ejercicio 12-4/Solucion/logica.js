var ultimoClickeado=null;
var links=document.getElementsByClassName('link');
for(var j=0; j<links.length;j++){
    links[j].addEventListener("click", function(){
      if(ultimoClickeado!==null){
        ultimoClickeado.classList.remove('active')
      }
      this.classList.add('active');
      ultimoClickeado=this;
    });
  }

  //creo la nueva seccion
  var seccionEuropa= document.createElement('section');
  //le asigno la clase texto gris
  seccionEuropa.classList.add('texto-gris');
  //creo el titulo
  var tituloEuropa= document.createElement('h2');
  //creo el texto para el titulo
  var textoTitulo= document.createTextNode("Europa");
  //seteo el texto al titulo
  tituloEuropa.appendChild(textoTitulo);
  //creo el parrafo
  var parrafoEuropa= document.createElement('p');
  //creo el texto para el parrafo
  var textoParrafo= document.createTextNode("Quis ad pariatur dolore et qui exercitation consectetur occaecat consequat eu laboris. Minim commodo commodo id proident sit consequat. Do cupidatat ad cupidatat occaecat eu esse eu ea velit irure. Cillum eiusmod est consectetur tempor dolor eu officia labore et. Reprehenderit aliqua ex aliqua ullamco pariatur incididunt eu sint. Sit velit ex qui nulla nulla. Laborum duis ea qui dolore commodo ex nisi cupidatat irure in laborum pariatur adipisicing.");
  //seteo el texto al parrafo
  parrafoEuropa.appendChild(textoParrafo);
  //agrego el titulo a la seccion
  seccionEuropa.appendChild(tituloEuropa);
  //agrego el parrafo a la seccion
  seccionEuropa.appendChild(parrafoEuropa);
  //agrego la seccion al body
  document.body.appendChild(seccionEuropa);

