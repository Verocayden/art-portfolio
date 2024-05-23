function sendMail() {
  let subject = document.getElementById("subject").value;
  let body = document.getElementById("message").value;
  window.location.href =
    "mailto:victoca@bell.net?subject=" + subject + "&body=" + body;
}
