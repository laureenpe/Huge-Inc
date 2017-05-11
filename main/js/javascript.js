//obtenemos el ID de la etiqueta anchor la cual escuchara al hacer
///click, va a obtener el ID "nav-header" y va a hacer toggle
//agregar y quitar la clase open.
document.getElementById("toggle").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("nav-header").classList.toggle("open");
  document.getElementById("body").classList.toggle("overflow-hidden");

})

//EL menu al hacer scroll down desaparece, cuando hace scroll up
//aparece y cambia de color el fondo del mismo a fucsia y los iconos
//cambian a blanco, al llegar al top u posición inicial el color del
//menu volvera a sus estilos iniciales

//hallar el valor de la posicion que me arroja el scroll al subir y bajar
var currentScroll= window.pageYOffset  || document.body.scrollTop; //nos devolvera la posicion actual del scroll

//guardar la ultima posicion y compararla con la anterior
var lastScrollTop = 0;
window.addEventListener("scroll", function(){
    var currentScroll= window.pageYOffset || document.body.scrollTop;
    if(currentScroll > lastScrollTop){
        document.getElementById("nav-header").classList.remove("header-in");
        document.getElementById("nav-header").style.opacity = 0;//la opacididad del menu sera 0 y se removera la clase que contiene el background fucsia
        console.log("down");
    } else{
        console.log("up");   
        document.getElementById("nav-header").classList.add("header-in");
        document.getElementById("nav-header").classList.add("solid");
        document.getElementById("nav-header").style.opacity = 1;
        //en caso de que el valor del scroll sea igual al inicial removemos
        //estas clases para retornar la interfaz inicial
        if(currentScroll<=3){
            document.getElementById("nav-header").classList.remove("solid");
            document.getElementById("nav-header").classList.remove("header-in");
        }
    }
    lastScrollTop = currentScroll;
},false); //en algun momento las variables se igualaran para esto seteamos que cuando sean iguales, no suceda nada

document.getElementById("toggle").addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("header").classList.toggle("open");
    document.getElementById("body").classList.toggle("overflow-hidden");
});
//esta clase tiene estilos en css