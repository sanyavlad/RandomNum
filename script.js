const min = 1, max = 4;
const randomNum =  Math.floor(Math.random()*(max-min+1) + min);
const inputNum = document.querySelector('#number');
const btn = document.querySelector('#btn');

let lives = 3;
let message = document.querySelector('#text');

document.querySelector('#min').textContent = min;
document.querySelector('#max').textContent = max;

const showMes = (text, style) => {
        message.textContent = text;
        message.classList.add(style);
}

btn.addEventListener('click', () =>{
    if(inputNum.value == ''){
        showMes('You typed empty value', 'danger');
    } else if (inputNum.value < min || inputNum.value > max) {
        showMes(`Input a number between ${min} and ${max}`, 'danger')
    } else if (inputNum.value == randomNum){
        inputNum.disabled = true;
        btn.textContent = 'Play again';
        showMes(`You win! The winning number is ${randomNum}`, 'success')
    } else if (lives != 0){
        lives--
        showMes(`${inputNum.value} is not correct! You have ${lives} guesses left`, 'danger')
    } else if (lives == 0){
    });

message.className += 'danger';
//Input a number between ${min} and ${max}