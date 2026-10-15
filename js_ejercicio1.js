
const buttonChangeColor = document.getElementById('buttonChangeColor');

buttonChangeColor.addEventListener("click", () => {
    let bgColor = Math.floor(Math.random() * 16777216).toString(16);
    let body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = '#' + bgColor
    console.log('Color cambiado al color: #' + bgColor);

})
