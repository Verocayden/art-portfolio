const response = await fetch("assets/translation.json");
const translation = await response.json();

$(function () {
  let language = localStorage.getItem("language");
  changeLanguage(language);

  $(".translate").click(function () {
    language = $("#toggle-language").text();
    localStorage.setItem("language", language);
    changeLanguage(language);
  });

  function changeLanguage(language) {
    $(".language").each(function (index, element) {
      $(this).text(translation[language][$(this).attr("key")]);
    });
  }
});

function sendMail() {
  let subject = document.getElementById("subject").value;
  let body = document.getElementById("message").value;
  window.location.href =
    "mailto:victoca@bell.net?subject=" + subject + "&body=" + body;
}

const menu = document.querySelector("#mobile-menu");
const navLogo = document.querySelector("#navbar-logo");
const menuLinks = document.querySelector("#navbar-sections");
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};
menu.addEventListener("click", mobileMenu);
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");

  if (window.innerWidth <= 800 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};
menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
