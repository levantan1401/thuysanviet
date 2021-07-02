window.onscroll = function() {
    dinhLenTren()
};

// mở nav
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    // document.getElementById("main").style.marginRight = "250px";
    document.getElementById("mySidebar").style.zIndex="333";
}

// tắt nav
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginRight= "0";
}

window.onscroll = function() {
    dinhLenTren()
};

function dinhLenTren(){
    var nav = document.getElementById('nav');
    if(document.body.scrollTop>153 || document.documentElement.scrollTop > 153){
        nav.style.position="fixed";
        nav.style.top=0;
        nav.style.left=0;
        nav.style.right=0;
        nav.style.backgroundColor="#F2F2F2";
        nav.style.zIndex='222';
    }else{
        nav.style.position=null;
        nav.style.backgroundColor="white";
    }
}

// mở account

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("iteam__nav").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu__nav')) {
    var dropdowns = document.getElementsByClassName("nav_mobile");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// ẩn hiện

function anHien(id) {
  var click = document.getElementById("click");
  var apear = document.getElementById(id);

  if (apear.style.display === "none") {
      apear.style.display=("block");
  } else {
    apear.style.display = "none";
  }
}