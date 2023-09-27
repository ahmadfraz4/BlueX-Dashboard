let sidebar = document.querySelector(".sidebar");
let header = document.querySelector("header");
let layer = document.querySelector(".layer");
let innerSection = document.querySelector(".inner-section");

// let sideLeft = parseInt(sidebarStyle.left);
function toggleNav() {
  let sidebarStyle = getComputedStyle(sidebar);
  let sideLeft = parseInt(sidebarStyle.left);
 
  if (sideLeft < 0) {
    
    layer.classList.add("appear");
    
    header.classList.remove("full-header");
    innerSection.classList.remove("full-inner-section");
    sidebar.classList.remove("sidebar-hide");
    sidebar.classList.add("sidebar-double");
  } else if(sideLeft == 0) {
    header.classList.add("full-header");
    innerSection.classList.add("full-inner-section");
    sidebar.classList.remove("sidebar-double");
    sidebar.classList.add("sidebar-hide");
    layer.classList.remove("appear");
  }
}


layer.addEventListener("click", () => {
  layer.classList.remove("appear");
  if (sidebar.classList.contains("sidebar-double")) {
    sidebar.classList.remove("sidebar-double");
  }
});
let searchBar = document.querySelector(".search-bar");
function iconCircle() {
  searchBar.classList.toggle("appear");
}
