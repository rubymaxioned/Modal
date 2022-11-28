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
var nav = document.querySelector('nav ul');
var dropdown = document.querySelector('.dropdown');
console.log(dropdown);

searchBtn.addEventListener('click', function () {
    searchText.classList.toggle('show');
})

//hamburger
var hamburger = document.querySelector('.bar');
var cross = document.querySelector('.hamburger .cross');
var nav = document.querySelector('nav');
var subMenu = document.querySelector('.sub-menu');
var dropDown = document.querySelector('.dropdown')
console.log(subMenu);

hamburger.addEventListener('click', function () {
    hamburger.classList.add('hide');
    cross.classList.add('show');
    nav.classList.add('show');
})

cross.addEventListener('click', function () {
    cross.classList.remove('show');
    hamburger.classList.remove('hide');
    nav.classList.remove('show');
})

dropDown.addEventListener('click', function () {
    // subMenu.forEach(function(list){
    //     list.classList.add('show');
    //     console.log(list);
    // })
    subMenu.classList.toggle('active');
})
