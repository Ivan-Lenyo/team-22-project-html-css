 const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("hidden")) {
        btn.textContent = "Less";
    } else {
        btn.textContent = "Read more";
    }

    content.classList.toggle("hidden");
}


const btnp = document.querySelector(".btnp");
const contentp = document.querySelector(".contentp");

btnp.addEventListener("click", btnpClick);

function btnpClick() {
    console.log(contentp.classList);

    if (contentp.classList.contains("hidden")) {
        btnp.textContent = "Less";
    } else {
        btnp.textContent = "Read more";
    }

    contentp.classList.toggle("hidden");
}