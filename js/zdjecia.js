function index() {
    document.getElementById('main').innerHTML = `

    <div id="zdjecia">
        <div class="chessphoto"><img src="css/img/photo1.jpg"></div>
        <div class="chessphoto"><img src="css/img/photo2.jpg"></div>
        <div class="chessphoto"><img src="css/img/photo3.jpg"></div>
        <div style="clear: both;"></div>

        <div class="chessphoto"><img src="css/img/photo10.jpg"></div>
        <div class="chessphoto"><img src="css/img/photo11.jpg"></div>
        <div class="chessphoto"><img src="css/img/photo12.jpg"></div>
        <div style="clear: both;"></div>

        <div style="clear: both;"></div>        
             <div class="chessphotosmall" id="firstphoto"><img src="css/img/photo4.jpg"></div>
             <div class="chessphotosmall"><img src="css/img/photo5.jpg"></div>
             <div class="chessphotosmall"><img src="css/img/photo6.jpg"></div>
             <div class="chessphotosmall"><img src="css/img/photo7.jpg"></div>
             <div class="chessphotosmall"><img src="css/img/photo8.jpg"></div>
             <div class="chessphotosmall"><img src="css/img/photo9.jpg"></div>
        <div style="clear: both;"></div>
    </div>
    `;
}

document.getElementById('m4').addEventListener('click',index);