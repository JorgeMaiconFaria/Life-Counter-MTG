let buttonLifeIncrease1 = document.getElementById("lifeIncrease1");
let buttonLifeIncrease5 = document.getElementById("lifeIncrease5");
let buttonLifeDecrease1 = document.getElementById("lifeDecrease1");
let buttonLifeDecrease5 = document.getElementById("lifeDecrease5");
let menuBTN = document.getElementById("menuBTN");
let lifeSpan = document.getElementById("lifeSpan")
let count = 20

function lifeIncrease(value) {
    lifeSpan.innerHTML = count += value;
}

function lifeDecrease(value) {
    lifeSpan.innerHTML = count -= value;
}

function showMenu() {
    let menu = document.getElementById("menu");
    menu.style.display == "block" ? menu.style.display = "none" : menu.style.display = "block"
}

buttonLifeIncrease1.addEventListener("click", () => lifeIncrease(1));
buttonLifeIncrease5.addEventListener("click", () => lifeIncrease(5));
buttonLifeDecrease1.addEventListener("click", () => lifeDecrease(1));
buttonLifeDecrease5.addEventListener("click", () => lifeDecrease(5));
menuBTN.addEventListener("click", showMenu)