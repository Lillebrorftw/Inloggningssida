//username and password
const namn = "Bella";
const lösenord = "qwe123";
let inputName = document.getElementById("user");
let inputPassword = document.getElementById("password");

//getelement uses the id to take the value of what is writen and is then used 
// if reads the inputName and compares it to namn and inputPassword compare to lösenord and if they are right, it store them in localStorage and gives and alert and console log

function checkLogin(){
    inputName = document.getElementById("user").value;
    inputPassword = document.getElementById("pass").value;
    
//if the user and password is right send them to welcomePage
    if(inputName === namn && inputPassword === lösenord){
        localStorage.setItem("user", inputName);
        localStorage.setItem("code", inputPassword);
        welcomePage();
    }
    else{
        backPage();
    }
}
//adds a eventlistener to the button and then uses the function checklogin when the button is clicked
document.getElementById("loginButton").addEventListener("click", function(){
    checkLogin();
});

//adds html h1, creates a button, btn id and eventlistener for click, when the button is clicked clears the localstorage and send the user back to the index page
function welcomePage(){

    document.body.innerHTML = "";
    document.body.insertAdjacentHTML("afterbegin", '<h1>Välkommen, du är nu inloggad!</h1></br></br>');
    const btn = document.createElement('button');
    btn.innerHTML = "Logga ut";
    btn.id = "loggaUt";
    document.body.appendChild(btn);
    btn.addEventListener("click", function(){
     localStorage.clear();
     gohome();
    });
}
function backPage() {
    document.body.innerHTML = "";
    document.body.insertAdjacentHTML("afterbegin", '<h1>Något blev fel</h1></br>');
    const newBtn = document.createElement('button');
    newBtn.innerHTML = "Tillbaka";
    newBtn.id = "newBtn";
    document.body.appendChild(newBtn);
    newBtn.addEventListener("click", function(){
        gohome();
    });
}
// send the user back to the index.html page
function gohome()
{
window.location.href="./index.html";
}
// if the localStorage have user and code then send them to welcomepage
if (localStorage.getItem("user", "code")){
    welcomePage();
}
