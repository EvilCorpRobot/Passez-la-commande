let btnPopup = document.getElementById('btnPopup');
let overlay = document.getElementById('overlay');
let btnClose = document.getElementById('btnClose');

btnPopup.addEventListener('click', openModal);

btnClose.addEventListener('click', closePopup);

function openModal(){
    overlay.style.display = 'block';
}

function closePopup(){
    overlay.style.display = 'none';
}