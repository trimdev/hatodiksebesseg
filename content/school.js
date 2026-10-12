// Iskolai adatok az aloldalakhoz. Forrás: www.hatodik-sebesseg.hu, átvéve 2026-10-06.
// Árváltozásnál, oktatócserénél, nyitvatartás-változásnál ezt a fájlt kell szerkeszteni.

export const contact={phone:'+36 70 325 8258',tel:'+36703258258',email:'hatodiksebessegsuli@gmail.com',office:'5000 Szolnok, Batthyány út 16/A.',officeNote:'Ady–Batthyány út sarok, a Pláza mellett',classroom:'5000 Szolnok, Horánszky út 3.',maps:'https://www.google.com/maps/search/?api=1&query=Hatodik+Sebess%C3%A9g+Aut%C3%B3siskola+Szolnok'};

// [nap, nyitás, zárás] órában; ebédidő minden nap 13:00–13:30
export const hours=[['Hétfő',9,15],['Kedd',9,15],['Szerda',9,17],['Csütörtök',9,15],['Péntek',9,17]];
export const lunch=[13,13.5];
export const visitNote='Az ügyintézéshez időpont nem szükséges, de javasoljuk, hogy mielőtt személyesen felkeresi irodánkat, egyeztessünk telefonon vagy e-mailben (az esetleges szabadságok, egyéb körülmények miatt). Kérjük, személyes ügyintézés előtt nézze meg a főoldalon az esetleges szabadságokra vonatkozó bejegyzéseket!';

export const leader='Szokola-Tóth Melinda';

export const perks=[
 'Kamatmentes részletfizetés (egyénre szabottan is).',
 'Kis létszámú csoportokat indítunk, hogy mindenki kellő figyelmet kapjon.',
 'Emelt óraszámú tantermi képzés.',
 'Számítógéppel és korszerű videóeszközökkel támogatott elméleti felkészítés.',
 'Pontosság és megbízhatóság.',
 'Rugalmas időbeosztás – akár egyénre szabottan is!',
 'Folyamatos fejlesztésekkel törekszünk arra, hogy hallgatóink felkészítését a lehető legjobb feltételekkel biztosítsuk.',
 'Közúti elsősegély-tanfolyam és vizsgára jelentés helyben.',
 'Nagy gyakorlattal rendelkező és megbízható szakoktatók.',
 'A tanfolyam elvégzése után rövid várakozási idő.',
 'Gyorsított gyakorlati képzés választási lehetősége.',
 'E-learning képzés – otthon tanulás tantermi KRESZ helyett, igény szerint személyes konzultációval.',
 'Modern, klimatizált oktatójárművek. Szükség esetén automata váltós gépkocsi.',
];

// ---- B kategória ----
export const subsidy='A sikeres KRESZ-vizsga után visszaigényelhető a 25 000 Ft-os állami támogatás (a visszaigénylésnek nem feltétele, hogy elsőre sikerüljön a KRESZ-vizsga).';
export const subsidyWho='Az állami támogatás azoknak jár, akik a KRESZ-vizsga napján a 20. életévüket nem töltötték be, vagy a KRESZ-vizsga napján – életkortól függetlenül – CSED, GYED vagy GYES jogosultsággal rendelkeznek.';
export const bTheory=[
 {id:'szolnok',name:'Tantermi képzés Szolnokon',price:40000,makeup:3000},
 {id:'korzet',name:'Tantermi képzés Szolnok 20 km-es körzetén belül',price:45000,makeup:3500},
 {id:'ocsod',name:'Tantermi képzés Öcsödön és Mesterszálláson',price:60000,makeup:3500},
 {id:'el',name:'E-learning (KRESZ otthon), Szolnok – 180 nap vagy 75 óra',price:39000},
 {id:'el-es',name:'E-learning + elsősegély, Szolnok – 180 nap vagy 75 óra',price:49000},
];
export const bRates=[
 {id:'normal',name:'Normál óradíj',price:9000},
 {id:'extra',name:'Extra (pl. intenzív oktatás, csak hétvégén vagy késő délután ráérő tanuló)',price:10000},
 {id:'auto',name:'Automata váltós óradíj',price:12600},
 {id:'atvett',name:'Másik képzőszervtől átvett tanuló óradíja',price:9200},
 {id:'kreta',name:'Magyar Honvédségtől vagy az ingyenes KRÉTÁS rendszerből érkezett tanuló óradíja',price:8800},
];
export const bExams=[['Elméleti vizsga',5100],['Forgalmi vizsga',12200]];
export const bank={name:'Hatodik Sebesség Autósiskola Kft.',account:'11600006-00000000-84121491',bankName:'Erste Bank',memo:'név + xy db óra'};
export const payment=[
 'Az elméleti képzés lehetőség szerint átutalással (ha nincs mód átutalásra, akkor készpénzben) fizetendő.',
 'A gyakorlati órák befizetése átutalással történik, készpénzes befizetésre a Képzőszerv ERSTE Banknál vezetett számlájára történő pénztári befizetéssel van mód. A gyakorlati oktatók pénzkezelésre nem jogosultak!',
 'A vizsgadíjakat a Képzőszerv bankszámlaszámára történő átutalással vagy banki készpénzbefizetéssel kell rendezni.',
 'Az elsősegély-nyújtási ismeretek vizsgadíját a Vöröskeresztnek kell befizetni az általa kiadott postai számlabefizetési megbízáson.',
];
export const extras=[
 ['Elsősegély-nyújtási ismeretek vizsga','20 900 Ft / vizsga'],
 ['Elsősegély-tanfolyam Szolnokon','19 000 Ft'],
 ['Vezetői engedély kiadása','6 900 Ft (25 év alatt az első díjmentes)'],
];
export const firstAidExempt=['orvostudományi egyetemen szerzett orvosi,','fogorvosi,','gyógyszerészi,','védőnői,','mentőtiszti,','gyógytornász,','egészségügyi szakoktató,','diplomás ápolói oklevéllel rendelkezők,','közegészségügyi felügyelői főiskolai szakon végzettek,','egészségügyi szakközépiskolát végzettek.'];

// ---- A kategóriák (motor) ----
export const moto=[
 {cat:'AM',age:14,rows:[{name:'Segédmotor',theory:48000,rate:8000,hours:11,exams:[['KRESZ',12700],['Járműkezelés',8700],['Forgalmi vizsga',8700]],total:166100}]},
 {cat:'A1',age:16,rows:[
  {name:'125 cm³-ig, 11 kW-ig',theory:48000,rate:10000,hours:17,exams:[['KRESZ',12700],['Járműkezelés',10900],['Forgalmi vizsga',29000]],total:270600},
  {name:'B-vel vezethető',theory:48000,rate:10000,hours:3,exams:[['KRESZ',12700],['Forgalmi vizsga',29000]],total:119700},
 ]},
 {cat:'A',age:24,rows:[
  {name:'Min. 35 kW',theory:48000,rate:10000,hours:27,exams:[['KRESZ',12700],['Járműkezelés',10900],['Forgalmi vizsga',29000]],total:370600},
  {name:'A1-gyel 2 éven túl',theory:48000,rate:10000,hours:11,exams:[['KRESZ',12700],['Járműkezelés',10900],['Forgalmi vizsga',29000]],total:210600},
  {name:'A2-vel 2 éven túl',theory:48000,rate:10000,hours:9,exams:[['KRESZ',12700],['Járműkezelés',10900],['Forgalmi vizsga',29000]],total:190600},
 ]},
];
export const gear=[
 'Bukósisak (E jelölésű)',
 'Protektoros kesztyű',
 'Protektoros ing vagy kabát (farmerdzseki vagy bőrkabát nem jó)',
 'Farmernadrág (de nem a nyári vékony) vagy protektoros nadrág',
 'Bokacsontot védő bakancs vagy motoros cipő, esetleg csizma. Jó a munkavédelmi bakancs vagy surranó is.',
];

// ---- Oktatók ---- photo: /assets/oktatok/<photo>.jpg, auto: automata váltós oktatás, lang: idegen nyelvű oktatás
export const instructors=[
 {name:'Baranya Tiborné',photo:'baranya-tiborne',cars:['Toyota Yaris (benzines)','Honda Jazz – automata váltós (benzines)'],auto:true},
 {name:'Bercsényi János',photo:'bercsenyi-janos',cars:['Mazda 5 (dízel)']},
 {name:'Dobos Anett',photo:'dobos-anett',cars:['VW Golf (dízel)']},
 {name:'Fehér Árpád',cars:[],note:'Automata váltós oktatás is',auto:true},
 {name:'Ferenczi Szabolcs',cars:['Audi A3 (dízel)'],away:'Betegség miatt átmenetileg nem oktat'},
 {name:'Földvári Sándor',photo:'foldvari-sandor',cars:['Citroen C3 (dízel)']},
 {name:'Hodászy Imre',cars:['Skoda Karoq','Kia Niro – automata váltós (elektromos)'],auto:true},
 {name:'Hutvágner Attila',photo:'hutvagner-attila',cars:['Toyota Yaris (dízel)']},
 {name:'Ihász Péter',photo:'ihasz-peter',cars:['Toyota Auris (benzines)']},
 {name:'Kácsor Mihály',photo:'kacsor-mihaly',cars:['Hyundai i30 (dízel)']},
 {name:'Kállai Zsolt',photo:'kallai-zsolt',cars:['VW Golf (benzines)']},
 {name:'Katona Tibor',photo:'katona-tibor',cars:['Toyota Yaris']},
 {name:'Katrinecz Csaba',photo:'katrinecz-csaba',cars:['Ford Fiesta (dízel)'],lang:['német','román']},
 {name:'Kiss-Krajcsovics Szilvia',cars:['Renault Clio (benzines)']},
 {name:'Kovács Zoltán',cars:['Citroen C3 (dízel)']},
 {name:'ifj. Kovács Zoltán',photo:'ifj-kovacs',cars:['Ford Fiesta']},
 {name:'Miskolczi Gyöngyvér',photo:'miskolczi-gyongyver',cars:['Peugeot 206 (dízel)']},
 {name:'Nemes Attila',photo:'nemes-attila',cars:['Chevrolet Aveo (benzines)']},
 {name:'Nemes László',photo:'nemes-laszlo',cars:['Ford Fiesta (dízel)']},
 {name:'Pintérné Ecseki Tünde',photo:'pinterne-ecseki-tunde',cars:['VW Golf (benzines)']},
 {name:'Sánta Zoltán',photo:'santa-zoltan',cars:['VW Golf (dízel)'],lang:['angol'],note:'Learn to drive in English.'},
 {name:'Szabó Csilla',photo:'szabo-csilla',cars:['Suzuki Swift (benzines)']},
 {name:'Veréb István',cars:['KIA Venga (dízel)']},
 {name:'Zolnai János',photo:'zolnai-janos',cars:['Toyota Corolla (dízel)','Toyota Yaris – automata váltós (hibrid)'],auto:true},
];

// ---- Cégadatok / vállalási feltételek ----
export const company=[
 ['Képző szerv megnevezése','Hatodik Sebesség Autósiskola Korlátolt Felelősségű Társaság'],
 ['Képzőszerv fantázianeve','Hatodik Sebesség Autósiskola'],
 ['Székhely','5200 Törökszentmiklós, Kálmán Imre utca 3.'],
 ['Tanterem címe','5000 Szolnok, Horánszky út 3.'],
 ['Telefonszám','+36 70 325 8258'],
 ['E-mail','hatodiksebessegsuli@gmail.com'],
 ['URL cím','www.hatodik-sebesseg.hu'],
 ['Cégforma','Korlátolt Felelősségű Társaság'],
 ['Cégtulajdonos','Szokola-Tóth Melinda'],
 ['Cégjegyzékszám','16-09-018536'],
 ['Adószám','26708241-1-16'],
 ['Számlaszám','Erste Bank 11600006-00000000-84121491'],
 ['Iskolavezető','Szokola-Tóth Melinda'],
 ['Iskolavezető e-mail címe','hatodiksebessegsuli@gmail.com'],
 ['Iskolavezető telefonszáma','+36 70 325 8258'],
 ['Iskolavezető KAV azonosító száma','12664'],
 ['Képzési engedély száma','KGHF/41568-1/2019-ITM'],
 ['Képzési engedély tartalma','Közúti járművezető-képzési tevékenység'],
 ['Ügyfélfogadás','5000 Szolnok, Batthyány út 16/A. (Ady–Batthyány út sarok, a Pláza mellett)'],
 ['Ügyfélfogadási idő','Hétfő: 9–15, Kedd: 9–15, Szerda: 9–17, Csütörtök: 9–15, Péntek: 9–17. Ebédidő minden nap 13:00–13:30.'],
 ['Engedélyező hatóság megnevezése','Építési és Közlekedési Minisztérium Közúti Gépjármű-közlekedési Hatósági Főosztály'],
 ['Engedélyező hatóság címe','1442 Budapest, Pf.: 89.'],
 ['Engedélyező hatóság telefonszáma','+36 (1) 477-1551'],
 ['Képzés felügyeletét ellátó szerv','Közlekedési Alkalmassági és Vizsgaközpont (KAV) Közép-kelet-magyarországi Régió'],
 ['Felnőttképzési nyilvántartási szám','B/2020/003628'],
];

// ---- Adatközlés (B kategória), negyedévente: [év, negyedév, VSM elmélet %, VSM gyakorlat %, ÁKÓ %, KK]. null = nincs adat.
// VSM: vizsgasikerességi mutató, ÁKÓ: átlagos képzési óraszám, KK: képzési költség. Új negyedév: új sor a végére.
export const kpi=[
 [2019,2,null,null,null,'„B” 194 000 Ft · „A” 194 000 Ft · „A1” 140 000 Ft · „AM” 69 000 Ft'],
 [2019,3,64.71,50.94,16.47,211100],[2019,4,63.89,65.63,143.68,183000],
 [2020,1,60.87,70.37,null,183000],[2020,2,73.68,53.33,155.17,183000],[2020,3,60.13,44.93,197.1,206000],[2020,4,56.98,61.29,166.76,228000],
 [2021,1,57.14,52.17,179.66,228000],[2021,2,67.61,60,165.29,228000],[2021,3,68.47,55.17,164.42,250800],[2021,4,53.01,53.92,151.72,265000],
 [2022,1,57.61,55.68,166.67,265000],[2022,2,54.87,52.04,183.88,269700],[2022,3,54.1,42.16,187.69,265000],[2022,4,39.22,40.71,172.8,293000],
 [2023,1,60.34,43.1,158.62,322000],[2023,2,45.16,55.2,168.22,322000],[2023,3,43.42,49.45,154.68,322000],[2023,4,51.52,40.8,174.14,322000],
 [2024,1,42.5,47.95,186.81,325000],[2024,2,42.22,40.45,180.32,337600],[2024,3,52,42.17,178.72,337000],[2024,4,47.14,28.89,170.76,337000],
 [2025,1,56.16,43.48,190.11,339000],[2025,2,55.56,30.95,183.79,339000],[2025,3,64.71,44.36,180.71,339500],[2025,4,42.67,39.83,172.1,303600],
 [2026,1,48.39,40,213.94,303600],[2026,2,46.58,35.92,190.32,324600],
];

export const ft=n=>n.toLocaleString('hu-HU',{useGrouping:'always'})+' Ft';

// nyitvatartási állapot adott napon (0 = hétfő) és órában (pl. 13.5 = 13:30)
const DAYS=['Hétfő','Kedd','Szerda','Csütörtök','Péntek','Szombat','Vasárnap'];
const hm=x=>`${Math.floor(x)}:${String(Math.round(x%1*60)).padStart(2,'0')}`;
export function statusAt(day,t){
 const today=hours[day];
 if(today&&t>=today[1]&&t<today[2]){
  if(t>=lunch[0]&&t<lunch[1])return{s:'lunch',text:'Ebédszünet',sub:`${hm(lunch[1])}-kor folytatjuk`};
  return{s:'open',text:'Most nyitva',sub:`${hm(today[2])}-ig várunk`};
 }
 if(today&&t<today[1])return{s:'closed',text:'Most zárva',sub:`Ma ${hm(today[1])}-kor nyitunk`};
 const next=day>=4?0:day+1;
 return{s:'closed',text:'Most zárva',sub:`${next===day+1?'Holnap':DAYS[next]+'n'} ${hm(hours[next][1])}-kor nyitunk`};
}
