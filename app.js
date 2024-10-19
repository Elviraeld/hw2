const buttons = document.querySelectorAll('.shopping-list button');
function changeColor(event) {
    event.target.style.color = 'blue'; 
}
function changeLine(event) {
    event.target.style.textDecoration = 'underline'; 
    event.removeEventListener('click', changeColor);   
}
buttons.forEach(button => {
    button.addEventListener('click', changeColor);
    button.addEventListener('click', changeLine);
});