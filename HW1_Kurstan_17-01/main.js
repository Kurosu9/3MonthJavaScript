const persnumInput = document.querySelector(".persnumInput");
const persnumCheck = document.querySelector(".persnumCheck");
const persnumResult = document.querySelector(".persnumResult");

const persnumRegExp = /^2\d{13}$/;

persnumCheck.addEventListener("click", () => {
    if (persnumRegExp.test(persnumInput.value)) {
        persnumResult.innerText = "ok";
        persnumResult.style.color = "green";
    } else {
        persnumResult.innerText = "not ok";
        persnumResult.style.color = "red";
    }
})

const smallBlock = document.querySelector(".smallBlock");

let position = 0;
smallBlock.addEventListener("click", () => {
    for (i = 0; i < 50; i++) {
        position++;
        smallBlock.style.left = `${position}px`;
    }
})