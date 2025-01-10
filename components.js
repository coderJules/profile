// TOGGLE DIV FOR PORTFOLIO SECTION


const observer = new MutationObserver(() => {
    const brandingElement = document.querySelector('.cog-branding.cog-branding--minimal');
    if (brandingElement) {
      // Stop observing once the branding element (end of form) is loaded
      observer.disconnect();
      // Hide the loading spinner
      document.getElementById('loadingOverlay').style.display = 'none';
    }
  });

  // Start observing the DOM for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

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

