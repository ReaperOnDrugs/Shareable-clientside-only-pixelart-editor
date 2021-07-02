let colors = ["#DD0DAA","#FF3F7C","#FF8357","#FFC14C","#F9F871"];
let section = document.querySelector("section");

function nsquare() {
    let square = document.createElement("span");
    let size = Math.random() * 80;

    square.style.width = size + "px";
    square.style.height = size + "px";
    square.style.background = colors[Math.floor(Math.random() * colors.length)];
    square.style.top = Math.random() * innerHeight + "px";
    square.style.left = Math.random() * innerWidth + "px";

    section.appendChild(square);
    setTimeout(() => {
        square.remove();
    }, 4000);
}

setInterval(nsquare, 150);