var btn = document.getElementById('moving-btn');
var presentText = document.querySelector('.present-text'); 
var pastText = document.querySelector('.past-text'); 

function leftClick() {
    btn.style.left = '0';
    presentText.style.display = 'block'; 
    pastText.style.display = 'none'; 
}

function rightClick() {
    btn.style.left = '200px';
    presentText.style.display = 'none'; 
    pastText.style.display = 'block'; 
}

document.addEventListener('DOMContentLoaded', leftClick);


