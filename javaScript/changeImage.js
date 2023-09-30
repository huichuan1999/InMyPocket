// function changeBg(hover) {
//     var background = document.getElementById('background');
//     if(hover) {
//         background.style.backgroundImage = "url('./images/BG2.jpg')";
//     } else {
//         background.style.backgroundImage = "url('./images/BG1.jpg')";
//     }
// }
function changeBg(hover) {
    var bg1 = document.getElementById('bg1');
    var bg2 = document.getElementById('bg2');
    if(hover) {
        bg1.style.opacity = '0';
        bg2.style.opacity = '1';
    } else {
        bg1.style.opacity = '1';
        bg2.style.opacity = '0';
    }
}

