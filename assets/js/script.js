var readBtn = document.querySelectorAll(".read-more");
var modal = document.querySelector(".modal-box");
var topClose = document.querySelector(".close");
var bottomClose = document.querySelector(".modal-box ul li:nth-of-type(1)");

readBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
        modal.classList.add('show');
    })
})


topClose.addEventListener('click', function () {
    modal.classList.remove('show');
})

bottomClose.addEventListener('click', function () {
    modal.classList.remove('show');
})

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        modal.classList.remove('show');
    }
})

window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.classList.remove('show');
    }
})

//click effects
//search
var searchBtn = document.querySelector('.search-button');
var searchText = document.querySelector('.search-text');

searchBtn.addEventListener('click', function () {
    console.log("working");
    searchText.classList.toggle('show');
})

//hamburger
var hamburger = document.querySelector('.bar');
var cross = document.querySelector('.hamburger .cross');
var navLink = document.querySelectorAll('.nav-link');
console.log(navLink);

hamburger.addEventListener('click', function () {
    console.log("working");
    hamburger.classList.add('hide');
    cross.classList.add('show');
    navLink.forEach(function (list) {
        list.classList.add('show');
    })
})

cross.addEventListener('click', function () {
    cross.classList.remove('show');
    hamburger.classList.remove('hide');
    navLink.forEach(function (list) {
        list.classList.remove('show');
    })
})
