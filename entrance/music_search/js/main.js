
let inputMusic = document.getElementById("input_music")
let BtnGenerator = document.getElementById("generator_input_music")
let music2022 = document.getElementById("wraper_music_generator")
let btnClose2022 = document.getElementById("close_button_generator")
let h3 = document.getElementById('text1')
let checkEN = document.getElementById("en")
let checkRU = document.getElementById('ru');
let infoError = document.getElementById("info-error")
let btnError = document.getElementById("close_button_error")


BtnGenerator.addEventListener("click", function EN() {
    if (checkRU.checked) {
        switch (inputMusic.value) {
            case '1995':
                h3.innerText = "Ты не верь слезам-Ласковый май ";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '1996':
                h3.innerText = "Попурри на темы песен прошлых лет-Сергей Минаев";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '1997':
                h3.innerText = "Ах, какая женщина-Игорь Крутой и Григорий Лепс";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '1998':
                h3.innerText = "Чёрный бумер-Сергей Шнуров";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '1999':
                h3.innerText = "Опять метель-Ирина Аллегрова";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2000':
                h3.innerText = "Парень-Тату";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2001':
                h3.innerText = "Пара нормальных-Пара нормальных";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2002':
                h3.innerText = "Лирика-Валерия";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2003':
                h3.innerText = "Любовь-морковь-Иванушки International";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2004':
                h3.innerText = "Моя московская девочка-Игорь Николаев";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2005':
                h3.innerText = "Мама-Вера Брежнева";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2006':
                h3.innerText = "Небо славян-Сергей Лазарев";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2007':
                h3.innerText = "Мало тебя-Винтаж";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2008':
                h3.innerText = "Тимур и его команда-Тимати";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2009':
                h3.innerText = "Мало половин-Стас Пьеха";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2010':
                h3.innerText = "Спящая красавица-Ева Польна";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2011':
                h3.innerText = "Подруга-ночь-Григорий Лепс";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2012':
                h3.innerText = "Полураздета-Дима Билан";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2013':
                h3.innerText = "Только для тебя-Макс Барских";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2014':
                h3.innerText = "Цвет настроения синий-Филипп Киркоров";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2015':
                h3.innerText = "Комарово-Максим Фадеев и Наргиз";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2016':
                h3.innerText = "Плакала-Кравц feat. Андрей Леницкий";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2017':
                h3.innerText = "Вечность-Елена Темникова";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2018':
                h3.innerText = "ДНК-Джиган feat. Артем Качер";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2019':
                h3.innerText = "Любимка-Макс Барских";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2020':
                h3.innerText = "Туда-Леша Свик";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2021':
                h3.innerText = "Ты самая самая-Ханна ";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2022':
                h3.innerText = "Ты самая самая-Ханна";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            default:
                // alert('Прочитайте условие');
                infoError.classList.add("info-error_show")
                
    
        }
    } else if(checkEN.checked){
        switch  (inputMusic.value) {
            case '1995':
                h3.innerText = "Gangsta's Paradise-Coolio featuring ";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '1996':
                h3.innerText = "Macarena-Los Del Rio";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '1997':
                h3.innerText = "Candle in the Wind-Elton John";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '1998':
                h3.innerText = "Too Close-Next";    
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '1999':
                h3.innerText = "GBelieve-Cher";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2000':
                h3.innerText = "Breathe-Faith Hill";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2001':
                h3.innerText = "Hanging by a Moment-Lifehouse ";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2002':
                h3.innerText = "Hot in Herre-Nelly";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2003':
                h3.innerText = "In da Club-50 Cent";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2004':
                h3.innerText = "Yeah!-Usher featuring Lil Jon and Ludacris";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2005':
                h3.innerText = "We Belong Together-Mariah Carey";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2006':
                h3.innerText = "Bad Day-Daniel Powter";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2007':
                h3.innerText = "Irreplaceable-Beyoncé";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2008':
                h3.innerText = "Bad Day-Daniel Powter";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2009':
                h3.innerText = "Boom Boom Pow-The Black Eyed Peas";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2010':
                h3.innerText = "Love the Way You Lie-Eminem featuring Rihanna";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2011':
                h3.innerText = "Rolling in the Deep-Adele";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2012':
                h3.innerText = "Somebody That I Used to Know-Gotye featuring Kimbra";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2013':
                h3.innerText = "Blurred Lines-Robin Thicke featuring T.I. and Pharrell Williams";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2014':
                h3.innerText = "Happy-Pharrell Williams";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2015':
                h3.innerText = "Uptown Funk-Mark Ronson featuring Bruno Mars";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2016':
                h3.innerText = "Love Yourself-Justin Bieber";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2017':
                h3.innerText = "Shape of You-Ed Sheeran";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2018':
                h3.innerText = "God's Plan-Drake";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2019':
                h3.innerText = "Old Town Road-Lil Nas X featuring Billy Ray Cyrus";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2020':
                h3.innerText = "Blinding Lights-The Weeknd";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2021':
                h3.innerText = "Driver's License-Olivia Rodrigo";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            case '2022':
                h3.innerText = "Montero (Call Me by Your Name)-Lil Nas ";
                music2022.classList.add("wraper_music_generator_show")
                break;
    
            default:
                infoError.classList.add("info-error_show")
        }
        
    }else{
        infoError.classList.add("info-error_show")
    }
});

btnClose2022.addEventListener("click", function () {
    music2022.classList.remove("wraper_music_generator_show")

});

btnError.addEventListener("click", function () {
    infoError.classList.remove("info-error_show")
});

