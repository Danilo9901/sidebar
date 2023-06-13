// Ejecuta la función al hacer clic
document.getElementById("btn-open").addEventListener("click", open_close_menu);

// Variables
var sidebar_menu = document.getElementById("sidebar-menu");
var btn_menu = document.getElementById("btn-open");
var body = document.getElementById("body");
var sidebarOpen = false;
var menuOptionItems = document.getElementsByClassName(".menu-option-item p");

// Función para abrir y ocultar el menú
function open_close_menu() {
  body.classList.toggle("body-move");
  sidebar_menu.classList.toggle("sidebar-move");

}


if (window.innerWidth) {

  body.classList.add("body-move");
  sidebar_menu.classList.add("sidebar-move");

}

window.addEventListener("resize", function(){

  if (window.innerWidth > 760){

      body.classList.remove("body-move");
      sidebar_menu.classList.remove("sidebar-move");
  }

  if (window.innerWidth < 760){

      body.classList.add("body-move");
      sidebar_menu.classList.add("sidebar-move");
  }

});