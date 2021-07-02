let size;
let data;

window.onload = function() {
    let sharedURL = location.href;
    let startPos = sharedURL.indexOf("?");
    let dataStart = sharedURL.indexOf("M");
    size = parseInt(sharedURL.substring(startPos,dataStart));
    data = sharedURL.substring(dataStart+1, sharedURL.length);
}