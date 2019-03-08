// TOGGLE DIV FOR PORTFOLIO SECTION

//THE BODY MECHANIC -----------------

function toggle_div() {
    var x = document.getElementById("div-name-here");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//DROPDOWN MENUS----------------

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction() {
  document.getElementById("myDropdownHome").classList.toggle("show");
}

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

//DIV REVEAL ON HOVER --------------

$('div.beginning').hide();
$('div.dig-design').hide();
$('div.web-dev').hide();
$('div.now').hide();


$('ul li').hover(function() {
    var cls = $(this).attr('class');
    $('div.'+cls).fadeToggle("fast");
})
