function index() {
    document.getElementById('main').innerHTML = `
    
<div id="maintytul">
    <h2>Czym są szachy?</h2>
</div>

<div id="photoszach">
    <img src="css/img/szachownica.png">
</div>

<div id="article">
<p>Szachy to gra planszowa, w której dwóch graczy symuluje bitwę pomiędzy dwiema armiami. Jest to jedna z najpopularniejszych gier na świecie. Miliony entuzjastów grają w nią rekreacyjnie oraz turniejowo.</p>

<p>Jest to gra, rozgrywana pomiędzy dwoma przeciwnikami po dwóch stronach szachownicy zawierającej 64 pola o naprzemiennych kolorach. Każdy zawodnik ma 16 bierek: jednego Króla, jednego Hetmana (zwanego też Królową), dwie Wieże, dwa Gońce, dwa Skoczki oraz osiem pionów</p>

<p>Celem gry jest danie mata Królowi przeciwnika. Mat ma miejsce wtedy, gdy jeden z Króli znajduje się pod atakiem (szachem) i nie ma możliwości spod niego uciec.</p>

<p>Szachy to strategiczna gra turowa bez ukrytych informacji. Właśnie dlatego nie istnieje tutaj element losowości, lub szczęścia.</p>
</div><div style="clear:both;">
`;
}

document.getElementById('title').addEventListener('click',index);