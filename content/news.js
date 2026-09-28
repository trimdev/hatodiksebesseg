// Aktuális hírek – ezt a fájlt kell szerkeszteni új hír, nyitvatartás-változás, betegség stb. esetén.
//
// Egy hír mezői:
//   date:   'ÉÉÉÉ-HH-NN'
//   tag:    'Fontos' | 'Nyitvatartás' | 'Vizsga' | 'Tanfolyam' | 'Hír'  (a címke színe ettől függ)
//   title:  rövid cím
//   text:   1–3 mondat
//   urgent: true  → a képernyő alján felugró értesítésben is megjelenik (egyszerre csak egy legyen)
//   sample: true  → MINTA felirattal jelenik meg; élesítés előtt töröld ezeket a bejegyzéseket
//
// A sorrend mindegy, a legfrissebb kerül előre.

export const office = [
 ['Ügyfélfogadás', 'Előzetes telefonos egyeztetés alapján'],
 ['Telefon', '+36 70 325 8258'],
 ['Cím', '5000 Szolnok, Batthyány út 16/A. (a Pláza mellett)'],
];

export const news = [
 {date:'2026-07-17', tag:'Vizsga', title:'Változtak a B kategóriás vizsgadíjak', text:'2026. július 17-től a B kategóriás elméleti vizsga díja 5 100 Ft (korábban 4 600 Ft), a gyakorlati vizsgáé 12 200 Ft (korábban 11 000 Ft).'},
 {date:'2026-10-20', tag:'Nyitvatartás', urgent:true, sample:true, title:'Október 23-án zárva tartunk', text:'A nemzeti ünnep miatt az iroda zárva tart, és aznap nincs gyakorlati óra. Október 24-től a megszokott rend szerint várunk.'},
 {date:'2026-09-15', tag:'Fontos', sample:true, title:'Betegség miatt elmaradó órák', text:'Egyik oktatónk betegsége miatt a héten néhány gyakorlati óra elmarad. Az érintett tanulókat telefonon keressük új időponttal.'},
 {date:'2026-09-01', tag:'Tanfolyam', sample:true, title:'Szeptemberben indul az új KRESZ-tanfolyam', text:'Tantermi és online formában is csatlakozhatsz. A részletekért és a pontos kezdésért hívj minket.'},
];
