let size;
let data;
let cellSize;
let currentColorIndex = 0;
let editedCells = Array();
let paletteColors = ["#000000","#222035","#45283c","#663a31","#8f563b","#df7126","#d8a065","#eec399",
                        "#fbf235","#99e44f","#6bbe30","#38946f","#4b682e","#534b24","#323d39","#3f3f73",
                        "#306182","#5a6ee1","#639bfe","#5fcde4","#cbdbfc","#ffffff","#9badb7","#847f86",
                        "#696b6a","#595651","#76428a","#ac3231","#d95763","#d67bba","#8f974a","#8b6f30"];
let content = document.querySelector("#content");

window.onload = function() {
    size = parseInt(localStorage.getItem("pixlySIZE"));
    data = localStorage.getItem("pixlyDATA");

    if (data == "blank"){
        newSetup(false);
    }
    else {
        readSetup();
    }
    localStorage.removeItem("pixlySIZE");
    localStorage.removeItem("pixlyDATA");
    loadColorPalette();
}

function newSetup(isRead) {
    cellSize = 100 / size;
    for (let i=0; i<size; i++){
        for (let j=0; j<size; j++){
            let newCell = document.createElement("div");
            newCell.setAttribute("id", i + "i" + j);
            newCell.style.setProperty("height", cellSize + "vh");
            newCell.style.setProperty("width", cellSize + "vh");
            newCell.classList.add("cell");
            newCell.setAttribute("onclick", "color(this)");
            content.appendChild(newCell);
        }
    }
    if (isRead){
        let nums = Array();
        let num = "";
        for (let i=0; i<data.length; i++){
            if (data[i] == ":"){
                nums.push(parseInt(num));
                num = "";
                if (nums.length >= 3){
                    currentColorIndex = nums[2];
                    document.getElementById(nums[0] + "i" + nums[1]).click();
                    nums = Array();
                }
            }
            else {
                num += data[i];
            }
        }
    }
}

function readSetup() {
    let sharedURL = location.href;
    let startPos = sharedURL.indexOf("?");
    let dataStart = sharedURL.indexOf("M");
    size = parseInt(sharedURL.substring(startPos+1,dataStart));
    data = sharedURL.substring(dataStart+1, sharedURL.length);
    newSetup(true);
}

function loadColorPalette() {
    let cont = document.querySelector("#spacer-left");

    for (let i=0; i<paletteColors.length; i++){
        let newc = document.createElement("div");
        newc.style.setProperty("height", "calc(((100vw - 100vh) / 2) / 8)");
        newc.style.setProperty("width", "calc(((100vw - 100vh) / 2) / 8)");
        newc.style.setProperty("background-color", paletteColors[i]);
        newc.setAttribute("onclick", "setCL(" + i + ")");

        cont.appendChild(newc);
    }
}

function setCL(index) {
    currentColorIndex = parseInt(index);
}

function color(cell) {
    let ind = cell.id;
    let iPos = ind.indexOf("i");
    let i = parseInt(ind.substring(0,iPos));
    let j = parseInt(ind.substring(iPos+1, ind.length));
    editedCells.push(i + ":" + j + ":" + currentColorIndex);
    cell.style.setProperty("background-color", paletteColors[currentColorIndex]);
}
/* 
    colour palette
    #000000  #222035  #45283c  #663a31  #8f563b  #df7126  #d8a065  #eec399
    #fbf235  #99e44f  #6bbe30  #38946f  #4b682e  #534b24  #323d39  #3f3f73
    #306182  #5a6ee1  #639bfe  #5fcde4  #cbdbfc  #ffffff  #9badb7  #847f86
    #696b6a  #595651  #76428a  #ac3231  #d95763  #d67bba  #8f974a  #8b6f30
*/
function encode() {
    let defPath = "./editor.html?";
    let data = "";
    for (let i=0; i<editedCells.length; i++) {
        data += editedCells[i] + ":";
    }

    let shareURL = defPath + size + "M" + data;
    location.href = shareURL;
}