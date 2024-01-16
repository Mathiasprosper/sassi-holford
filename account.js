$(document).ready(function(){
    $(".logIn-button").click(function(){
        var email = document.getElementById("email").value;
        var password = document.getElementById("password");
        
    
        document.getElementById("emailText").textContent = "";
        document.getElementById("code").textContent = "";
    
        if(email == ""){
            let email = document.getElementById("emailText");
            emailText.textContent = "Input Email"
        }
        if(password.value.length < 8){
            let password = document.getElementById("code");
            password.textContent = "Incorrect password"
        }
    });
    $(".signIn-btn").click(function(){
        var Name = document.getElementById("fullName");
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone");   
        var password = document.getElementById("password");
        
    
        document.getElementById("fullnameText").textContent = "";
        document.getElementById("emailValidate").textContent = "";
        document.getElementById("number").textContent = "";
        document.getElementById("pattern").textContent = "";
        
    
    
        if(Name.value.length < 5){
            let fullnameText = document.getElementById("fullnameText");
            fullnameText.textContent = "Enter your full name"
        }

        if(email == ""){
            let email = document.getElementById("emailValidate");
            email.textContent = "Input Email"
        }
        if(phone.value.length < 11){
            let number = document.getElementById("number");
            number.textContent = "Input Phone Number"
        }
        if(password.value.length < 8){
            let pattern = document.getElementById("pattern");
            pattern.textContent = "Invalid"
        }
    });
});