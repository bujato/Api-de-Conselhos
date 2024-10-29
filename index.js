let btn = document.querySelector("#btn");
let res = document.querySelector("#res");

// Utilização da API;
fetch('https://api.adviceslip.com/advice')
.then((advice) => advice.json())
.then((id) => {
    res.innerHTML = id.slip.advice;
});

// Botão de Reset da página Web;
btn.addEventListener("click", () => {
    location.reload();
})
