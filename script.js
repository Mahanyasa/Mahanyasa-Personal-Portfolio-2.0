const cursor = new MouseFollower({
  container: document.body,
  speed: 0.3,
  ease: 'expo.out',
});

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

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
  } else {
      setTheme('theme-light');
  }

})();