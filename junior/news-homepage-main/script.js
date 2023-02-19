const btnHambeger = document.querySelector(".hambeger");
const showNav = document.querySelector(".container .nav .nav-items");
const btnClose = document.querySelector(".container .nav .nav-items .close");

// console.log(btnHambeger);
// console.log(showNav);
// console.log(btnClose);

(function name(params) {
    btnHambeger.addEventListener('click', ()=>{ 
        showNav.classList.add('show-nav');
        btnClose.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    btnClose.addEventListener('click', ()=>{
        showNav.classList.remove('show-nav');
        btnClose.classList.remove('show');
        document.body.style.overflow = 'scroll';
    });


})();