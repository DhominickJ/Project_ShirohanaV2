// let menulogo = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menulogo.onclick = () => {
//     menulogo.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

function toggleNavBar() {
    var x = document.getElementsByClassName("header");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }