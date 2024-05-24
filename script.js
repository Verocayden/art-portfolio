const arrLang = {
  FR: {
    "nav-about": "À propos",
    "nav-artwork": "Créations",
    "nav-comics": "Bandes dessinées",
    "nav-contact": "Contact",
    "hero-title": "Victoria-Mae Carrière",
    "hero-subtitle": "@Verocayden, Character Artist",
    "hero-content":
      "Artiste numérique et étudiant en ingénierie, je construis des ponts interdisciplinaires entre arts et sciences. À travers mes créations, d'inspirations à la fois occidentale et orientale, je souhaite relier des communautés d'un océan à l'autre.",
    "hero-button": "Contactez-Moi",
    "comics-section-title": "Bandes dessinées",
    "comic1-title": "Nos Masques",
    "comic1-publisher": "Publié dans Isekai Touch #1",
    "comic1-info": "2e place à la Bourse Manga O-Taku 2022",
    "comic2-title": "Annuelle",
    "comic2-publisher": "Publié dans PLANCHES #18",
    "contact-section-title": "Contact",
    "contact-subject": "Objet: ",
    "contact-message": "Message: ",
    "send-button": "Envoyer",
    "social-media-title": "Réseaux sociaux",
    language: "EN",
  },
  EN: {
    "nav-about": "About",
    "nav-artwork": "Artwork",
    "nav-comics": "Comics",
    "nav-contact": "Contact",
    "hero-title": "Victoria-Mae Carrière",
    "hero-subtitle": "@Verocayden, Character Artist",
    "hero-content":
      "Digital artist and student in software engineering, I want to build bridges between art, science, and technology. Through my creations of both Western and Eastern inspirations, I want to connect communities from coast to coast.",
    "hero-button": "Contact Me",
    "comics-section-title": "Comics",
    "comic1-title": "Nos Masques (FR)",
    "comic1-publisher": "Published in Isekai Touch",
    "comic1-info": "2nd place at O-Taku Manga Contest 2022",
    "comic2-title": "Annuelle (FR)",
    "comic2-publisher": "Published in PLANCHES",
    "contact-section-title": "Contact",
    "contact-subject": "Subject: ",
    "contact-message": "Message: ",
    "send-button": "Send",
    "social-media-title": "Social Media",
    language: "FR",
  },
};

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
      $(this).text(arrLang[language][$(this).attr("key")]);
    });
  }
});
function sendMail() {
  let subject = document.getElementById("subject").value;
  let body = document.getElementById("message").value;
  window.location.href =
    "mailto:victoca@bell.net?subject=" + subject + "&body=" + body;
}
