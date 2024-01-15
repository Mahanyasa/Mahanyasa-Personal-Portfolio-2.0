function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleProject() {
  var x = document.getElementById('hdn-dv');
  var b = document.getElementById('btn-prj');

  if (x.style.display !== 'block') {
    x.style.display = 'block';
    b.childNodes[0].nodeValue = "Less";

  } else {
    x.style.display = 'none';
    b.childNodes[0].nodeValue = "More";
  }

}