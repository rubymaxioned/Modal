var readBtn = document.querySelector(".card-content .read-more");
var modal = document.querySelector(".modal");
var topClose = document.querySelector(".close");
var bottomClose = document.querySelector(".modal ul li:nth-of-type(1)");
// console.log(bottomClose);

readBtn.addEventListener('click', function () {
    modal.classList.add('show');
})

topClose.addEventListener('click', function () {
    modal.classList.remove('show');
})

bottomClose.addEventListener('click', function () {
    modal.classList.remove('show');
})

window.addEventListener('click',function(){
    
})