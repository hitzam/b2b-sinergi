function sendToWhatsapp() {
    let number = "+628179282777";

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    var url = "https://wa.me/" + number + "?text="
        + "Name: " + name + "%0a"
        + "Email: " + email + "%0a"
        + "Subject: " + subject + "%0a"
        + "Phone: " + phone + "%0a"
        + "Message: " + message + "%0a%0a";

    window.open(url, '_blank').focus();
}