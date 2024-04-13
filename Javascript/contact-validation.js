const form = document.getElementById("form");
const userName = document.getElementById("name");
const userSubject = document.getElementById("subject");
const userEmail = document.getElementById("email");
const userMessage = document.getElementById("message");
const errorSpace = document.getElementById("error-message");

const error = document.querySelector(".error")
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const subjectError = document.querySelector(".subject-error");
const messageError = document.querySelector(".message-error");

// validate name start 
function validateName() {
    const regex = /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/;
    const name = userName.value;

    if ((name.length === 0) || (!regex.test(name))) {
        nameError.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`
        errorSpace.innerText = "Please enter a valid name";
        userName.style.border = "2px solid rgb(164, 0, 0)"
        return false;
    }
    else {
        nameError.innerHTML = `<i class="fa-solid fa-circle-check" style='color:rgb(41, 122, 1)'></i>`
        errorSpace.innerText = "";
        userName.style.border = "2px solid rgb(27, 115, 1)"
        return true;
    }
}

// subject validation start
function validateSubject(){
    const subject  = userSubject.value.trim();

    let required = 10;
    const nonWhitespaceChars = subject.replace(/\s/g, '').length;
    let left  = required - nonWhitespaceChars;

    let maxi = 25;
    let overChar = subject.length - maxi;

    if(subject.length === 0 || nonWhitespaceChars < required){
        subjectError.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`;
        userSubject.style.border = "2px solid rgb(164, 0, 0)"
        errorSpace.innerText = `${left} more characters required for a valid subject`;
        return false;
    }
    errorSpace.innerText = "";
    if (nonWhitespaceChars > maxi) {
        errorSpace.innerHTML = `<span style='color:#FF6308'><i class="fa-regular fa-lightbulb" style='color:#FF6308'></i> ProTip! Great subject summaries contain fewer than ${maxi} characters. Your subject contains ${overChar} characters more than required.</span>`;
        userSubject.style.border = "2px solid #FF6308"
        subjectError.innerHTML = `<i class="fa-solid fa-circle-check" style='color:#FF6308'></i>`;
        return true;
    }
    else {
        subjectError.innerHTML = `<i class="fa-solid fa-circle-check" style='color:rgb(27, 115, 1)'></i>`;
        userSubject.style.border = "2px solid rgb(27, 115, 1)";
        errorSpace.innerText = "";
        return true;
    }
}
// email validation start 
function validateEmail() {
    const regex = /^[a-z0-9](\.?[a-z0-9]){3,}@[Gg][Mm][Aa][Ii][Ll]\.com$/;
    const email = userEmail.value;

    if ((email.length === 0) || (!email.match(regex))) {
        emailError.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`;
        errorSpace.innerText = `Please enter a valid email address`;
        userEmail.style.border = "2px solid rgb(164, 0, 0)";
        return false;
    }
    else {
        emailError.innerHTML = `<i class="fa-solid fa-circle-check" style='color:rgb(41, 122, 1)'></i>`;
        userEmail.style.border = "2px solid rgb(27, 115, 1)";
        errorSpace.innerText = "";
        return true;
    }
}

// message validation start 
function validateMessage() {
    const message = userMessage.value;
    let required = 35;
    const nonWhitespaceChars = message.replace(/\s/g, '').length;
    let left  = required - nonWhitespaceChars;
    if (message.length < required || message.length === 0 ) {
        errorSpace.innerHTML = `${left} more characters required to send the message`;
        userMessage.style.border = "2px solid rgb(164, 0, 0)"
        messageError.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`;
        return false;
    }
    else {
        errorSpace.innerHTML = "<span style='color:rgb(41, 122, 1)'>Now message can be send</span>";
        userMessage.style.border = "2px solid rgb(27, 115, 1)"
        messageError.innerHTML = `<i class="fa-solid fa-circle-check" style='color:rgb(41, 122, 1)'></i>`;
        
        return true;
    }
}

// smtp intigration start 
function sendmail(){
    const messageBody = `Hi I am ${userName.value} <br> My email address is: ${userEmail.value} <br> My message is: ${userMessage.value}`
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sharmaoncourse@gmail.com",
    Password : "B33D9F91BB922C2DC7D2B52C77A1E9BF2F68",
    To : 'lipubiswajit109@gmail.com',
    From : "sharmaoncourse@gmail.com",
    Subject : userSubject.value,
    Body : messageBody
}).then(    
    (message) => alert(message)
);}

function validateAndSubmit(e){
    e.preventDefault();
    if(!validateName() || !validateSubject() || !validateEmail() || !validateMessage()){
        errorSpace.innerText = `Please fix the error to submit the credentials`;
        setTimeout(() => {
            errorSpace.innerText = ''
        }, 3000);
        return false;
    }
    else sendmail();
    return true
}
form.addEventListener('submit', validateAndSubmit);
