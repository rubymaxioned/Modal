var readBtn = document.querySelectorAll(".read-more");
var modal = document.querySelector(".modal-box");
var topClose = document.querySelector(".close");
var bottomClose = document.querySelector(".modal-box ul li:nth-of-type(1)");
// console.log(bottomClose);

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