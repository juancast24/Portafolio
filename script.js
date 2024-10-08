let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //funcion para ocultar el menu una vez se selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >= 300){
      let habilidades = document.getElementsByClassName("progreso");
      habilidades[0].classList.add("javascript");
      habilidades[1].classList.add("htmlcss");
      habilidades[2].classList.add("python");
      habilidades[3].classList.add("comunicacion");
      habilidades[4].classList.add("trabajo");
      habilidades[5].classList.add("creatividad");
      habilidades[6].classList.add("dedicacion");
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidades.
window.onscroll = function(){
    efectoHabilidades();
}