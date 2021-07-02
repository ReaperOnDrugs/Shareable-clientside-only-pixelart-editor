function showselect() {
    let bigB = document.querySelector(".btn");
    bigB.classList.add("btn_open");
    setTimeout(() => {
        bigB.classList.remove("btn");
    }, 100);
    setTimeout(() => {
        bigB.querySelector("span").classList.add("n");
        let buttons = bigB.querySelectorAll("div");
        bigB.style.setProperty("display", "flex");
        bigB.style.setProperty("justify-content", "space-around");
        bigB.style.setProperty("align-items", "center");
        bigB.style.setProperty("width", "60rem");
        bigB.style.setProperty("height", "10rem");
        buttons.forEach(b => {
            b.classList.remove("n");
            b.classList.add("show");
        });
    }, 500);
}

function createpage(sizeOption){
    localStorage.setItem("pixlyDATA", "blank");
    localStorage.setItem("pixlySIZE", sizeOption);
    location.href = "./editor.html";
}