document.querySelector(".join-btn").addEventListener("click", function() {
    alert("Welcome to our Web Design & Development Course!");
});

document.querySelector(".login-btn").addEventListener("click", function () {
    let usernameField = document.querySelector("#username");
    let passwordField = document.querySelector("#password");

    let username = usernameField.value.trim();
    let password = passwordField.value.trim();

    if (username === "" || password === "") {
        alert("Please fill both fields before login.");
        return;
    }

    alert("Login Successfully.");
    usernameField.value = "";
    passwordField.value = "";
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    alert("Your message has been sent successfully!");
});
