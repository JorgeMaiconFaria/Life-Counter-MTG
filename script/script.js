let buttonLifeIncrease1 = document.getElementById("lifeIncrease1");
let buttonLifeIncrease5 = document.getElementById("lifeIncrease5");
let buttonLifeDecrease1 = document.getElementById("lifeDecrease1");
let buttonLifeDecrease5 = document.getElementById("lifeDecrease5");
let lifeSpan = document.getElementById("lifeSpan")

let count = 20

function lifeIncrease() {
    lifeSpan.innerHTML = count += 1;
}

function lifeIncrease5() {
    lifeSpan.innerHTML = count += 5;
}

function lifeDecrease1() {
    lifeSpan.innerHTML = count -= 1;
}

function lifeDecrease5() {
    lifeSpan.innerHTML = count -= 5;
}

buttonLifeIncrease1.addEventListener("click", lifeIncrease)
buttonLifeIncrease5.addEventListener("click", lifeIncrease5)
buttonLifeDecrease1.addEventListener("click", lifeDecrease1)
buttonLifeDecrease5.addEventListener("click", lifeDecrease5)