function dark() {
    document.getElementById('container').style.backgroundColor = "#303030";
    document.getElementById('container').style.color = "white";
    document.getElementById('photo').style.backgroundColor = "#303030";
    document.getElementById('main').style.backgroundColor = "#303030";
}

function light(){
    document.getElementById('container').style.backgroundColor = "beige";
    document.getElementById('container').style.color = "black";
    document.getElementById('photo').style.backgroundColor = "beige";
    document.getElementById('main').style.backgroundColor = "beige";
}

let i=0;

function choose() {
    if(i%2==0)
    {
        dark();
        document.getElementById('photo').innerHTML = `<img src="css/img/sun.png">`
    }
    else
    {
        light();
        document.getElementById('photo').innerHTML = `<img src="css/img/moon.png">`
    }
    i++;
}

document.getElementById('photo').addEventListener('click',choose);