let m1 = document.getElementById('m1');
let m2 = document.getElementById('m2');
let m4 = document.getElementById('m4');
let m5 = document.getElementById('m5');

function mm1(){
    m1.classList.add('active');
}
function mm2(){
    m2.classList.add('active');
}
function mm4(){
    m4.classList.add('active');
}
function mm5(){
    m5.classList.add('active');
}

function usun(){
    m1.classList.remove('active');
    m2.classList.remove('active');
    m4.classList.remove('active');
    m5.classList.remove('active');
}

m1.addEventListener('click',usun);
m2.addEventListener('click',usun);
m4.addEventListener('click',usun);
m5.addEventListener('click',usun);

document.getElementById('title').addEventListener('click',usun);

m1.addEventListener('click',mm1);
m2.addEventListener('click',mm2);
m4.addEventListener('click',mm4);
m5.addEventListener('click',mm5);