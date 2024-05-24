const response = await fetch("./assets/translation.json");
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
