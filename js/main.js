
let inputName = document.getElementById("input_name");
let inputSurname = document.getElementById("input_Surname");
let inputEmail = document.getElementById("input_E-mail");
let inputPassword = document.getElementById("input_Password");
let inputConfirmYourPassword = document.getElementById("input_Confirm-your-password");
let btnRegistration = document.getElementById("button-Registration");
let btnEntrance = document.getElementById("button-Entrance")
let redCube = document.getElementById("Registration_error");
let BtnError = document.getElementById("button_error");
let wraperOK = document.getElementById("Registration_OK")
let BtnOK = document.getElementById("button_OK")    
let wraperPassword = document.getElementById("Registration_password")
let BtnPassword = document.getElementById("button_password")
let start = document.getElementById("start")
let btEntrance = document.getElementById("buttton_Entrance")
let btRegistration = document.getElementById("buttton_Registration")
let Registration = document.getElementById("info-Registration")
let Entrance = document.getElementById("info-Entrance")

 
window.addEventListener('load', () => {
      Registration.classList.add("info-Registration_show");
  });


btnRegistration.addEventListener("click", function() {
    // Registration.classList.remove("info-Registration_show");
    redCube.classList.remove("Registration_error_show");
    wraperOK.classList.remove("Registration_OK_show");
    wraperPassword.classList.remove("Registration_password_show");

    if (inputName.value.length && 
         inputSurname.value.length &&
          inputEmail.value.length &&
           inputPassword.value.length &&
            inputConfirmYourPassword.value.length &&
             inputPassword.value == inputConfirmYourPassword.value

        ){
            wraperOK.classList.add("Registration_OK_show");
    } else if (inputPassword.value == inputConfirmYourPassword.value)  {
        redCube.classList.add("Registration_error_show")
    } else {
        wraperPassword.classList.add("Registration_password_show");
    } 
    
})


BtnError.addEventListener("click",function(){
    redCube.classList.remove("Registration_error_show")
});

BtnOK.addEventListener("click",function(){
    wraperOK.classList.remove("Registration_show")
});

BtnPassword.addEventListener("click",function(){
    wraperPassword.classList.remove("Registration_password_show")
});


btRegistration.addEventListener("click",function(){
    Entrance.classList.remove("info-Entrance_show")
    Registration.classList.add("info-Registration_show")
});


btEntrance.addEventListener("click",function(){
    Registration.classList.remove("info-Registration_show")
    Entrance.classList.add("info-Entrance_show")
});



// Registration.classList.add("Registration_show")
// Registration.classList.remove("Registration_show")
// Entrance.classList.remove("Entrance_show")
// Entrance.classList.add("Entrance_show")


// ------------------------------------------------------


let testJS = document.getElementById("test");
let wraperBan = document.getElementById("Entrance_ban")
let BtnBan = document.getElementById("button_ban")
let wraperSave = document.getElementById("Entrance_save")
let BtnSave = document.getElementById("button_save")
let EntranceEmail = document.getElementById("Entrance_E-mail")
let EntrancePassword = document.getElementById("Entrance_Password")



btnEntrance.addEventListener("click", function () {

    redCube.classList.remove("Entrance_error_show");
    wraperOK.classList.remove("Entrance_OK_show");
    wraperBan.classList.remove("Entrance_ban_show");
    wraperSave.classList.remove("Entrance_save_show");

    if ((EntranceEmail.value.length &&
        EntrancePassword.value.length) == 0) {
            redCube.classList.add("Entrance_error_show")
        // alert('заполнить');
    }
    else if ((EntrancePassword.value && EntrancePassword.value) == 'admin') {
        let adminPassword = prompt();
        if (adminPassword == "admin") {
            wraperOK.classList.add("Entrance_OK_show");
        } else {
            wraperBan.classList.add("Entrance_ban_show");
        }
     } else {
            wraperSave.classList.add("Entrance_save_show");
    
    } 
});

// ggg.addEventListener("click", function (){
//     console.log(2)
// })



BtnError.addEventListener("click",function(){
    redCube.classList.remove("Entrance_error_show")
});

BtnOK.addEventListener("click",function(){
    wraperOK.classList.remove("Entrance_OK_show")
});

BtnBan.addEventListener("click",function(){
    wraperBan.classList.remove("Entrance_ban_show")
});

BtnSave.addEventListener("click",function(){
    wraperSave.classList.remove("Entrance_save_show")

});




