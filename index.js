let btn = document.querySelector("#btn");
let res = document.querySelector("#res");

fetch('https://api.adviceslip.com/advice')
.then((advice) => advice.json())
.then((id) => {
    res.innerHTML = id.slip.advice;
});

btn.addEventListener("click", () => {
    location.reload();
})