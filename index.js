let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formbtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-closed');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let formregister = document.querySelector('#register');
let Registration = document.querySelector('.registeration');
let formcloseregi = document.querySelector('#form-close');
let loginopen = document.querySelector('#login');
let popup = document.getElementById('popup');
let popup1 = document.getElementById('popup1');

function openPopup() {
    Registration.classList.remove('active');
    loginform.classList.remove('active')
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}


function openPopupLogin() {
    Registration.classList.remove('active');
    loginform.classList.remove('active')
    popup1.classList.add("open-popup");
}

function closePopupLogin() {
    popup1.classList.remove("open-popup");
}



window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
    loginform.classList.remove('active');
    Registration.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active')
});



menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
});

formbtn.addEventListener('click', () => {
    loginform.classList.add('active');
});

formclose.addEventListener('click', () => {
    loginform.classList.remove('active');
});

formregister.addEventListener('click', () => {
    Registration.classList.add('active');
});

formcloseregi.addEventListener('click', () => {
    Registration.classList.remove('active');
    loginform.classList.remove('active')
});

