function index() {
    document.getElementById('main').innerHTML = `
<div id="maintytul">
    <h2>Bobby Fischer</h2>
</div>

<div id="fischer">
    <img src="css/img/fischer.jpg">
</div>

<div id="article">
<p>Bobby Fischer był jedenastym oficjalnym mistrzem świata oraz pierwszym i jedynym jak dotąd Amerykaninem, który zasiadł na szachowym tronie. Przez wielu jest uważany za najsłynniejszego szachistę w dziejach. W latach 1970-71 Fischer wygrał 20 partii z rzędu z przeciwnikami z najwyższej półki, bezprecedensowe i niewyobrażalne osiągnięcie, którego prawdopodobnie już nikt nie powtórzy. Ten sukces jest zaliczany do siedmiu najbardziej niesamowitych szachowych rekordów.</p>

<p>W roku 1972 Fischer pokonał Spassky'ego w "meczu stulecia" i odebrał mu tytuł mistrza świata. Warto zaznaczyć, że Amerykanin rozpoczął od stanu 0:2 po tym, jak przegrał kompletnie remisową końcówkę w pierwszej partii i walkowerze w drugiej. Mówi się, że Fischer w latach 1970-72 (czyli w samym środku "zimnej wojny") w pojedynkę pokonał szachowe imperium sowieckie. Jego wyczyn jest uznawany za jeden z najlepszych indywidualnych wyników wszech czasów.</p>

<p>Grał unikalne, oryginalne i kreatywne szachy. Potrafił atakować i bronić się w partiach z najlepszymi, jednak to wyczucie pozycyjne budziło największy szacunek. Fischer był inspiracją dla kilku pokoleń graczy w USA i na całym świecie.</p>
</div>

<div style="clear: both; margin-bottom: 40px;"></div>

<div id="maintytul1">
    <h2>Mikhail Tal</h2>
</div>

<div id="article1">
<p>Mikhail Tal, znany również jako "czarodziej z Rygi," był ósmym mistrzem świata. Pokonał Botvinnika w 1960 roku i założył na swą głowę szachową koronę w wieku 23 i pół roku, stając się najmłodszym mistrzem w historii (potem młodziej tytuł zdobywali jedynie Kasparov i Carlsen).</p>

<p>Swój intuicyjny sposób gry Tal z powodzeniem przeciwstawiał pozycyjnemu stylowi opartemu na rzetelnym teoretycznym przygotowaniu, reprezentowanemu przez współczesnych mu arcymistrzów. Jego grę Wasilij Smysłow określił jako „sztuczki i nic więcej”, jednak Tal wygrywał z najlepszymi. Swoimi niespodziewanymi poświęceniami doprowadzał do niewiarygodnie skomplikowanych pozycji, stwarzając przeciwnikom problemy nie do rozwiązania podczas partii. Nawet jeśli w późniejszych głębokich analizach okazywało się, że poświęcenie nie było poprawne, to jednak jego zdumiewające koncepcje budziły uznanie, a brawura często była nagradzana aplauzem kibiców. Był ulubieńcem publiczności.</p>

<p>Znany ze swojego błyskotliwego, atakującego stylu gry, Tal był inspiracją agresywnych graczy przez dekady, ba, jest nią po dziś dzień! Jednym z jego niezapomnianych cytatów jest "Musisz zabrać swojego przeciwnika daleko do ciemnego lasu, w którym 2+2=5, a ścieżka, prowadząca do wyjścia jest wystarczająco szeroka tylko dla jednego."</p>

</div>

<div id="tal">
    <img src="css/img/tal.jpg">
</div>

</div><div style="clear:both;">

`;
}

document.getElementById('m2').addEventListener('click',index);