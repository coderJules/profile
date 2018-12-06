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

