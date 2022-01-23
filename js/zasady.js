function index() {
    document.getElementById('main').innerHTML = `

<div id="zasady">    
    <h1>Zasady gry w szachy</h1>


    <h2>Figury w grze w szachy - jakie są ich ruchy?</h2>



<p>Figury w szachach dzielą się na białe i czarne a przydział konkretnego koloru dla gracza dokonywany jest w wyniku losowania. Mamy do czynienia z różnymi figurami, z których każda podczas rozgrywki pełni nieco inną rolę i daje inne możliwości ruchu.</p>

<p>Pionki - ich na polu gry jest najwięcej lecz mają jednocześnie najmniejsze możliwości ruchu mogąc się ruszać jedynie o jedno pole do przodu. Są jednak od tej zasady wyjątki bowiem w pierwszym ruchu w grze pion może wykonać ruch o dwa pola (pamiętać jednak musimy, że nadal może to być jedynie ruch do przodu w linii prostej). Wyjątek stanowi też sytuacja gdy w na ukos od naszego pionka znajdzie się figura przeciwnika, wtedy może on poruszyć się na ukos właśnie bijąc figurę wroga.</p>


<p>Hetman - to jest z kolei najsilniejsza figura w grze bowiem jej możliwości ruchu są nieograniczone. Hetman może poruszać się o dowolna liczbę pól zarówno w przód i w tył a także na boki i na ukos. Warto więc mądrze wykorzystywać Hetmana podczas rozgrywki bowiem jego strata może być dla nas bolesna.</p>

<p>Goniec - ta figura może poruszać się jedynie po przekątnej aczkolwiek może wykonywać ruch o dowolną liczbę pól. Goniec biały porusza się jedynie po białych polach natomiast czarny po czarnych.</p>

<p>Skoczek - to dość ciekawa figura mogąca mieć naprawdę istotną rolę podczas gry w szachy. Przede wszystkim uwagę zwraca specyficzny zakres ruchu skoczka gdyż figura ta wykonuje ruch w kształcie litery L (trzy pola do przodu i jedno w bok - dowolnie lewa lub prawa).</p>

<p>Co ciekawe skoczek to druga oprócz pionków figura, którą możemy rozpoczynać grę. To co jeszcze czyni skoczka wyjątkową figurą w szachach to fakt, że może on przeskakiwać inne figury i dotyczy to zarówno figur przeciwnika jak i naszych własnych. Jak więc widać skoczek daje naprawdę duże możliwości taktyczne i tylko od nas zależy czy uda nam się je odpowiednio wykorzystać.</p>

<p>Wieża - może poruszać się tylko w linii prostej o nieograniczoną ilość pól.</p>

<p>Król - najważniejsza figura w grze w szachy, która jednocześnie ma mocno ograniczony zakres ruchu. Król w szachach może się bowiem poruszać jedynie o jedno pole w każdym kierunku.</p>

<p>Jak więc widać każda z figur ma swoją określoną specyfikę przez co mniej czy bardziej może przydać się w różnych sytuacjach.</p>

<h2>Jak grać w szachy?</h2>

<p>Skoro już wiemy jak mogą poruszać się poszczególne figury na szachownicy to pora opowiedzieć sobie nieco o zasadach odpowiadając na tytułowe pytanie o to "jak grać w szachy?". Podstawa to początek gry a zacząć musimy od odpowiedniego ustawienia figur.</p>

<p>Zasady gry w szachy jasno określają kolejność ustawienia figur. Idąc od prawej:

    <ul>
    <li>Wieża
    <li>Skoczek</li>
    <li>Goniec</li>
    <li>Król</li>
    <li>Hetman</li>
    <li>Goniec</li>
    <li>Skoczek</li>
    <li>Wieża</li>
    </ul>

</p>

<p>Jak więc widać Hetman i Król to to figury pojedyncze, które ustawiane są w środku a po lewej i prawej mają figury podwójne w postaci Wieży, Skoczka i Gońca. Gdy ustawienie pierwszej linii figur będzie już gotowe pora na drugą linie w której umieszczamy wszystkie pionki z naszego koloru.</p>

<p>Gdy ustawienie figur jest już poprawne to można rozpocząć właściwą rozgrywkę. Zasady gry w szachy jasno definiują, że pierwszy ruch wykonuje gracz mający białe figury i może wykorzystać do tego tylko pionek albo skoczka. Potem kolejne ruchy gracze wykonują już na zmianę, raz jeden raz drugi.</p>

<p>Celem gry w szachy jest doprowadzenie dopadnięcie króla przeciwnika. Gdy król znajduje się w zasięgu bicia naszej figury następuje mat i w takim przypadku w kolejnym ruchu przeciwnik musi wykonać właśnie ruch królem na bezpieczne pole.</p>

<p>Grę definitywnie kończy szach mat a więc ustawienie w którym król przeciwnika bez względu na ruch jaki wykona byłby zbity w następnej turze.</p>

</div>

    `;
}

document.getElementById('m1').addEventListener('click',index);