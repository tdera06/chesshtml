function index() {
    document.getElementById('main').innerHTML = `
<div id="maintytul">
    <h2>Gambit królowej</h2>
</div>

<div id="article" style="width: 1200px">

<div id="part1"><p>"Gambit królowej", autorstwa Waltera Tevisa, to opowieść o pasji i życiowych zawirowaniach, które wynikają z braku empatii ze strony najbliższego otoczenia.</p>

<p>Elizabeth Harmon ma ogromny talent, bez większego wysiłku rozbija szachowych rywali i w konsekwencji trafia na usta wszystkich. Nie jest jednak idealna, od dzieciństwa toczy walkę z własnymi słabościami. Największym przeciwnikiem Beth w drodze na szczyt może okazać się ona sama. Czy pokona swoje demony?</p></div>

<div class="gambit"><img src="css/img/gambit1.jpg"></div>
<div style="clear: both; margin-bottom: 50px;"></div>

<div class="gambit" style="width:600px; height:400px; margin-left: 0px; margin-right: 50px;"><img src="css/img/gambit2.jpg"></div>
<div id="part2">
<p>"Gambit królowej" to powieść napisana przez Waltera Tevisa, która po raz pierwszy wydana została w roku 1983. Poruszane w niej tematy pozostały aktualne nawet po upływie kilku dekad, a o mocnym charakterze przedstawionej historii doskonale świadczy ogromny sukces serialowej adaptacji zrealizowanej przez platformę Netflix.</p>

<p>Beth Harmon - cicha ośmiolatka - trafia do sierocińca, w którym poznaje dwie pasje, jakie będą towarzyszyć jej przez kolejne lata: używki oraz szachy. Dziewczynka bardzo szybko uzależnia się od podawanych dzieciom codziennie środków na uspokojenie. Jednocześnie odkrywa w sobie niesamowity talent do gry w szachy, który rozwija pod okiem mrukliwego woźnego.</p></div>
<div style="clear: both; margin-bottom: 50px;"></div>

<div id="part3">
<p>Z czasem analityczny umysł Beth pozwala jej stać się gwiazdą sportu uznawanego za domenę mężczyzn. Początkowo lekceważona, bez oporu miażdży swoich rywali. Bohaterka wydaje się skazana na sukces, jednak wcześniej będzie musiała pokonać własne słabości.</p>

<p>"Gambit królowej" to ciekawie skonstruowana powieść, która porusza wiele ponadczasowych tematów, jednocześnie pozostając wierną tylko jednej postaci - Beth Harmon. Bohaterka mierzy się z przeciwnościami losu: ciężarem talentu, uzależnieniami, wykluczeniem społecznym czy problemem adaptacji w nowej rodzinie.</p>
</div>

</div>
<div style="clear: both;"></div>
    `;
}

document.getElementById('m5').addEventListener('click',index);