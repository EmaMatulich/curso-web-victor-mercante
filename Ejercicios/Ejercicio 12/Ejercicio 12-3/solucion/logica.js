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