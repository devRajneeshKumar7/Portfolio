document.addEventListener('mousemove', parallax);
function parallax(e) {
    this.querySelectorAll('.bg').forEach(bg => {
        const speed = bg.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 80;
        const y = (window.innerHeight - e.pageY * speed) / 80;

        bg.style.transform = `translateX(${x}px) translateY(${y}px)`;
    })
}










const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})


function zoom(size) {
    document.querySelector('.cursor').style.transform = `scale(${size})`;
}










let choosen = null;





function rated(chose, choseWhat, rating) {


    let yo = document.getElementById(choseWhat);
    let tell = document.getElementById('tell');
    let tell_full = document.getElementById('full_tell');
    let tell_chose = document.getElementById('tell_chose');
    let tell_rating = document.getElementById('tell_rate');


    if (choosen !== null) {
        document.getElementById(choosen).style.color = 'rgb(65, 76, 88)';


        tell_full.style.opacity = '0';
        tell_full.style.zIndex ='-10';

        tell.style.opacity = '0';
        tell.style.zIndex = '-10';
    }




    if (choosen !== choseWhat) {
        percent.innerHTML = chose;

        choosen = choseWhat;
        yo.style.color = ' rgb(255, 73, 73)';


        tell_full.style.opacity = '1';
        tell_full.style.zIndex ='0';


        tell.style.opacity = '1';
        tell.style.zIndex = '1';
        tell_chose.setAttribute('value', 'Your skills are ' + chose);
        tell_rating.setAttribute('value', rating);
    }



    else {
        percent.innerHTML = '';
        choosen = null;
    }


}














let hidden = true;
let navbar = document.getElementById('navbar');

let open_nav = document.getElementById('open');
let nav_bg = document.getElementById('nav-bg');


function show_nav() {

    if (hidden === false) {

        navbar.style.top = '-90%';
        navbar.style.left = '-10%';
        nav_bg.style.top = '-100%';
        nav_bg.style.left = '-100%';

        

        hidden = true;
        open_nav.innerHTML = '<i class="fas fa-bars"></i>';
    }

    else {

        navbar.style.top = '0';
        navbar.style.left = '50%';
        nav_bg.style.top = '0';
        nav_bg.style.left = '0';


        open_nav.innerHTML = '<i class="fas fa-minus"></i>';
        hidden = false;
    }


}













let progressbar = document.getElementById('progressbar');
let percent = document.getElementById('percent');




let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progress = (window.pageYOffset / totalHeight) * 100 / 1.2;
    progressbar.style.height = progress + '%';
}







let email_box = document.getElementById('email');
let line = document.getElementById('email_line');
let email_text = document.getElementById('email_text');



email_box.addEventListener('focusout', email);
email_box.addEventListener('keypress' && 'click' && 'focus', line_email);
email_box.addEventListener('invalid', invalid_email);


function line_email(){
    line.style.height = '100%';
    email_text.style.top = '-35px';
    email_text.style.left = '-10px';
}



function invalid_email(){
    line.style.color = 'red';
}



function email(){
    if (email_box.value === ''){
        line.style.height = '2px';
        email_text.style.top = '0';
        email_text.style.left = '0';
    }



    else{
        line.style.height = '100%';
        email_text.style.top = '-35px';
        email_text.style.left = '-10px';
    }
}

