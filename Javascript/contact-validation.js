const form = document.getElementById("form");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");
const errorSpace = document.getElementById("error-message");

const error = document.querySelector(".error")
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const messageError = document.querySelector(".message-error");

// validate name start 
function validateName() {
    const regex = /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
    const name = userName.value;

    if ((name.length === 0) || (!regex.test(name))) {
        nameError.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`
        errorSpace.innerText = "Please enter a valid name";
        errorSpace.style.display = "block";
        return false;
    }
    else {
        nameError.innerHTML = `<i class="fa-solid fa-circle-check" style='color:rgb(41, 122, 1)'></i>`
        errorSpace.style.display = "none";
        return true;
    }
}

function validateEmail() {
    const regex = /^[a-z0-9](\.?[a-z0-9]){3,}@[Gg][Mm][Aa][Ii][Ll]\.com$/;
    const email = userEmail.value;

    if ((email.length === 0) || (!email.match(regex))) {
        emailError.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`;
        errorSpace.innerText = `Please enter a valid email address`;
        errorSpace.style.visibility = "visible";
        return false;
    }
    else {
        emailError.innerHTML = `<i class="fa-solid fa-circle-check" style='color:rgb(41, 122, 1)'></i>`;
        errorSpace.style.visibility = "hidden";
        return true;
    }
}

function validateMessage() {
    const message = userMessage.value;
    let required = 30;
    let left = required - message.length;

    if (message.length < required) {
        errorSpace.innerHTML = `${left} more letter to send the message`;
        messageError.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`;
        return false;
    }
    else {
        errorSpace.innerHTML = "<span style='color:rgb(41, 122, 1)'>Now message can be send</span>";
        messageError.innerHTML = `<i class="fa-solid fa-circle-check" style='color:rgb(41, 122, 1)'></i>`;
        
        return true;
    }
}