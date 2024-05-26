// Drop Down Menu
function dropDown() {

    // console.log(document.getElementByClassName("navMenu").style.display.value);
    // menu.style.display = "inline-block";

    // if (menu == "none") {
    //     document.getElementByClassName("navMenu").style.display.value = "inline-block";
    // } else {
    //     document.getElementByClassName("navMenu").style.display.value = "none";
    // }

    document.getElementById("#mainNav").style.display = "none";
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}