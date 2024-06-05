let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let button = document.getElementById('button');


button.addEventListener('click', () => { 
    let seconds = eval(`${parseFloat(minutesInput.value)} * 60`);
    secondsInput.value = seconds
});