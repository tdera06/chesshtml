var c = document.getElementById("title").children;

function usuntitle() {
    c[0].classList.remove('letterspacing');
}

function dodajtitle() {
    c[0].classList.add('letterspacing');
}

document.getElementById('menu').addEventListener('click',usuntitle);
document.getElementById('title').addEventListener('click',dodajtitle);