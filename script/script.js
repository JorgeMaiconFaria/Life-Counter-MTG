let buttonLifeIncrease1 = document.getElementById("lifeIncrease1");
let buttonLifeIncrease5 = document.getElementById("lifeIncrease5");
let buttonLifeDecrease1 = document.getElementById("lifeDecrease1");
let buttonLifeDecrease5 = document.getElementById("lifeDecrease5");
let btnWhite = document.getElementById("branco");
let btnBlue = document.getElementById("azul");
let btnBlack = document.getElementById("preto");
let btnRed = document.getElementById("vermelho");
let btnGreen = document.getElementById("verde");
let btnAzhorus = document.getElementById("azhorus");
let btnDimir = document.getElementById("dimir");
let btnRakdos = document.getElementById("rakdos");
let btnGruul = document.getElementById("gruul");
let btnSelesnya = document.getElementById("selesnya");
let btnOrzhov = document.getElementById("orzhov");
let btnBoros = document.getElementById("boros");
let btnIzzit = document.getElementById("izzit");
let btnSimic = document.getElementById("simic");
let btnGolgari = document.getElementById("golgari");
let crownBtn = document.getElementById("crown");
let btnMoon = document.getElementById("moon");
let btnEnergy = document.getElementById("energy");
let btnPoison = document.getElementById("poison");
let monarchBtn = document.getElementById("monarchImg");
let menuBTN = document.getElementById("menuBTN");
let lifeSpan = document.getElementById("lifeSpan")
let count = 20

function lifeIncrease(value) {
    if(count < 1000) {
        lifeSpan.innerHTML = count += value;
    }
}

function lifeDecrease(value) {
    if(count > -100) {
        lifeSpan.innerHTML = count -= value;
    }
}

function showMonarch() {
    !monarchBtn.classList.contains("show") ? monarchBtn.classList.add("show") : monarchBtn.classList.remove("show")
}

function showMenu() {
    let menu = document.getElementById("menu");
    if(!menu.classList.contains("show")) {
        menu.style.display = "block"
        setTimeout(function() {menu.classList.add("show")
    })
    } else {
        menu.classList.remove("show")
        setTimeout(function() {menu.style.display = "none"
    }, 100)
    }
}

function changeBackground(url, color) {
    document.body.style.backgroundImage = url
    lifeSpan.style.color = color
}

function activeMonarch() {
    monarchBtn.classList.contains("show") && monarchBtn.style.opacity == 1 ? 
    monarchBtn.style.opacity = 0.2 : monarchBtn.style.opacity = 1
}

buttonLifeIncrease1.addEventListener("mousedown", () => lifeIncrease(1));
buttonLifeIncrease5.addEventListener("mousedown", () => lifeIncrease(5));
buttonLifeDecrease1.addEventListener("mousedown", () => lifeDecrease(1));
buttonLifeDecrease5.addEventListener("mousedown", () => lifeDecrease(5));
menuBTN.addEventListener("click", showMenu);
crownBtn.addEventListener("mousedown", showMonarch);
monarchBtn.addEventListener("mousedown", activeMonarch)
btnWhite.addEventListener("mousedown", () => changeBackground("url(../img/plains.jpg)", "black"));
btnBlue.addEventListener("mousedown", () => changeBackground("url(../img/island.jpg)", "black"));
btnBlack.addEventListener("mousedown", () => changeBackground("url(../img/swamp.jpg)", "black"));
btnRed.addEventListener("mousedown", () => changeBackground("url(../img/mountain.jpg)", "black"));
btnGreen.addEventListener("mousedown", () => changeBackground("url(../img/forest.jpg)", "black"));
btnAzhorus.addEventListener("mousedown", () => changeBackground("url(../img/azhorus.jpg)", "black"));
btnBoros.addEventListener("mousedown", () => changeBackground("url(../img/boros.jpg)", "black"));
btnDimir.addEventListener("mousedown", () => changeBackground("url(../img/dimir.jpg)", "black"));
btnGolgari.addEventListener("mousedown", () => changeBackground("url(../img/golgari2.jpg)", "lightgreen"));
btnGruul.addEventListener("mousedown", () => changeBackground("url(../img/gruul.jpg)", "black"));
btnIzzit.addEventListener("mousedown", () => changeBackground("url(../img/izzit.jpg)", "black"));
btnSimic.addEventListener("mousedown", () => changeBackground("url(../img/simic.jpg)", "black"));
btnSelesnya.addEventListener("mousedown", () => changeBackground("url(../img/selesnya.jpg)", "lightgreen"));
btnRakdos.addEventListener("mousedown", () => changeBackground("url(../img/rakdos.jpg)", "black"));
btnOrzhov.addEventListener("mousedown", () => changeBackground("url(../img/orzhov1.jpg)", "black"));