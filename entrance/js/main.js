


let inputEmail = document.getElementById("input_E-mail");
let inputPassword = document.getElementById("input_Password");
let btnRegistration = document.getElementById("button-Registration");
let testJS = document.getElementById("test");
let redCube = document.getElementById("wraper_error")
let BtnError = document.getElementById("button_error")
let wraperOK = document.getElementById("wraper_OK")
let BtnOK = document.getElementById("button_OK")
let wraperBan = document.getElementById("wraper_ban")
let BtnBan = document.getElementById("button_ban")
let wraperSave = document.getElementById("wraper_save")
let BtnSave = document.getElementById("button_save")




btnRegistration.addEventListener("click", function () {

    redCube.classList.remove("wraper_error_show");
    wraperOK.classList.remove("wraper_OK_show");
    wraperBan.classList.remove("wraper_ban_show");
    wraperSave.classList.remove("wraper_save_show");

    if ((inputEmail.value.length &&
        inputPassword.value.length) == 0) {
            redCube.classList.add("wraper_error_show")
        // alert('заполнить');
    }
    else if ((inputEmail.value && inputPassword.value) == 'admin') {
        let adminPassword = prompt();
        if (adminPassword == "admin") {
            wraperOK.classList.add("wraper_OK_show");
        } else {
            wraperBan.classList.add("wraper_ban_show");
        }
     } else {
            wraperSave.classList.add("wraper_save_show");
    
    } 
});

BtnError.addEventListener("click",function(){
    redCube.classList.remove("wraper_error_show")
});

BtnOK.addEventListener("click",function(){
    wraperOK.classList.remove("wraper_OK_show")
});

BtnBan.addEventListener("click",function(){
    wraperBan.classList.remove("wraper_ban_show")
});

BtnSave.addEventListener("click",function(){
    wraperSave.classList.remove("wraper_save_show")

});



