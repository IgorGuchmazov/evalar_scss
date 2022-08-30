document.addEventListener('DOMContentLoaded', () => {

    let menuBtn = document.querySelector('.burger__btn');
    let menu = document.querySelector('.menu');

    menuBtn.addEventListener('click',function(){
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
    })
    window.addEventListener('click', e => {
        const target = e.target;
        if (!target.closest('.menu') && !target.closest('.burger__btn')){
            menu.classList.remove('active');
            menuBtn.classList.toggle('active');
        }
    })

})