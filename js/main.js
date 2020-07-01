/* start - inlcude de los html */

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
/* end - inlcude de los html */


function mostrarMenuGestiones(){
  document.getElementById("accordionExample").style.display = "none";
  document.getElementById("accordionGestiones").style.display = "block";
  document.getElementById("lateralNav").style.backgroundColor = "#025ABE";
}

function ocultarMenuGestiones(){
  document.getElementById("accordionGestiones").style.display = "none";
  document.getElementById("accordionExample").style.display = "block";
  document.getElementById("lateralNav").style.backgroundColor = "#1F2F59";
}




function mostrarMenuGestionesMobile(){
  document.getElementById("accordionExampleMobile").style.display = "none";
  document.getElementById("accordionGestionesMobile").style.display = "block";
  document.getElementById("myLinks").style.backgroundColor = "#025ABE";
  /* document.getElementById("tituloGestiones").focus(); */
}

function ocultarMenuGestionesMobile(){
  document.getElementById("accordionGestionesMobile").style.display = "none";
  document.getElementById("accordionExampleMobile").style.display = "block";
  document.getElementById("myLinks").style.backgroundColor = "#1F2F59";
}





/* start - slideshow */

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 
/* end - slideshow */




/* 
*********************************
     ACTUALMENTE SIN USO
*********************************
 */

/* start - loading page */
var myVar;

function loadingPage() {
  myVar = setTimeout(showPage, 500);
  
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  /* document.getElementById("body").style.backgroundColor = "white"; */
  document.getElementById("fullContainer").style.display = "block";
  document.getElementById("footer").style.display = "block";
}
/* end - loading page */


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
} 

function changeMenuIcon(x) {
  x.classList.toggle("change");
} 