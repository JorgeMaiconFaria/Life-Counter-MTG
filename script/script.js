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

function show() {
    let menu = document.getElementById("menu");
    if(!menu.classList.contains("show")) {
        menu.style.display = "block"
        setTimeout(function() {menu.classList.add("show")
    })
    } else {
        menu.classList.remove("show")
        setTimeout(function() {menu.style.display = "none"
    }, 1500)
    }
}

buttonLifeIncrease1.addEventListener("click", () => lifeIncrease(1));
buttonLifeIncrease5.addEventListener("click", () => lifeIncrease(5));
buttonLifeDecrease1.addEventListener("click", () => lifeDecrease(1));
buttonLifeDecrease5.addEventListener("click", () => lifeDecrease(5));
menuBTN.addEventListener("click", show)