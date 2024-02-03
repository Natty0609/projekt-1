let listek = 12;
let navstevniku = 174;
let predstaveni = 15;
let prijem = (listek * navstevniku * predstaveni);
document.body.innerHTML = '<p>Přijem divadla: ' + prijem + 'Kč';

let studenti = (navstevniku * 0.40);
let slevaStudentu = studenti * (listek * 0.35);
let prijemPoSleve = prijem - slevaStudentu;
document.body.innerHTML += '<p>Příjem divadla se studentskou slevu: ' + prijemPoSleve + 'Kč';