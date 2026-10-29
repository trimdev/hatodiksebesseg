import Link from 'next/link';
import {PageHero,Arrow} from '../chrome';
import {perks,leader,contact} from '../../../content/school';

export const metadata={title:'Tanfolyamaink • Hatodik Sebesség Autósiskola',description:'Tantermi és e-learning KRESZ-tanfolyam Szolnokon, Öcsödön és Mesterszálláson, kamatmentes részletfizetéssel. Sikeres KRESZ-vizsga után azonnal kezdhető a gyakorlat.'};

const formats=[
 ['Tantermi','Szolnokon','Kis csoportban, emelt óraszámmal, számítógéppel és videóval támogatva. Szolnok 20 km-es körzetében, valamint Öcsödön és Mesterszálláson is indítunk csoportot.','40 000 Ft-tól'],
 ['E-learning','Otthonról','KRESZ a saját tempódban: 180 nap vagy 75 óra. Iskolánk konzulens elméleti oktatót biztosít, igény szerint személyes konzultációval.','39 000 Ft-tól'],
];
const kreta=[['Letöltöd','a Kréta rendszerből az e-jogsi igazolást.'],['Elküldöd','nekünk e-mailben.'],['Kiválasztod','a fizetési módot – részletfizetés is van!'],['Vezetsz','várakozás nélkül.']];
const notes=[
 ['Orvosi alkalmassági','A tanfolyamra való jelentkezéshez már szükséges az orvosi alkalmassági megléte! Kérjük, keressék fel háziorvosukat, és utána sok szeretettel várjuk Önöket beiratkozni ügyfélfogadási időben a Pláza melletti irodánkban.'],
 ['Ajándékozz jogsit','Különböző programcsomagokból választhatsz az utalványt illetően – keress minket e-mailben vagy személyesen! Hogy könnyen válthass hatodikba, válaszd a Hatodik Sebesség Autósiskolát!'],
 ['Öcsödiek figyelem!','Már nálunk is elérhető a kunszentmártoni indulás a gyakorlati oktatás során!'],
 ['Új év, új célok','Ha az újévi fogadalmad között szerepel, hogy végre megtanulsz vezetni, a Hatodik Sebesség csapata itt van, hogy segítsen megvalósítani! Ne halogasd tovább, tedd meg az első lépést egy önállóbb és szabadabb élet felé!'],
];

export default function Page(){
 return <>
  <PageHero gear={1} eyebrow="Képzések · 2026" title={<>Tanfolyam<em>aink.</em></>} lead="Hatékony, gyakorlatias tanfolyam, amely megtanít mindenre, amit a jogosítványhoz tudnod kell – hogy a lehető leghamarabb a volán mögé ülhess.">
   <div className="hero-actions rise" style={{'--d':'.55s'}}><Link className="button red magnetic" href="/kapcsolat#jelentkezes">Jelentkezem <Arrow/></Link><Link className="ghost" href="/b-kategorias-tanfolyamok-koltsegei">Díjak megtekintése</Link></div>
  </PageHero>

  <section className="section">
   <div className="banner" data-reveal><span className="banner-kicker">Nálunk</span><p>Sikeres KRESZ-vizsga után <em>azonnal</em> kezdhető a gyakorlati képzés!</p></div>
   <div className="section-top"><div><span className="eyebrow" data-reveal>01 — Válaszd a ritmusod</span><h2 data-reveal>Tanteremben<br/>vagy <em>otthonról?</em></h2></div><p data-reveal>Bármelyiket választod, a sikeres KRESZ-vizsga után azonnal kezdheted a gyakorlatot.</p></div>
   <div className="formats">{formats.map(([t,k,p,price],i)=><article key={t} data-reveal style={{'--d':i*100+'ms'}}><span className="format-kicker">{k}</span><h3>{t}</h3><p>{p}</p><div className="format-foot"><b>{price}</b><Link className="text-link" href="/b-kategorias-tanfolyamok-koltsegei">Részletek <Arrow/></Link></div></article>)}</div>
  </section>

  <section className="section dash-section">
   <div className="section-top"><div><span className="eyebrow light" data-reveal>02 — Műszerfal</span><h2 data-reveal>Minden lámpa <em>zöldön.</em></h2></div><p data-reveal>Amiért a tanulóink minket választanak – egy pillantással.</p></div>
   <ul className="lamps">{perks.map((p,i)=><li key={p} data-reveal style={{'--d':(i%4)*70+'ms'}}><i aria-hidden="true"/>{p}</li>)}</ul>
  </section>

  <section className="section kreta">
   <div className="section-top"><div><span className="eyebrow" data-reveal>03 — Középiskolában végezted a KRESZ-t?</span><h2 data-reveal>Már csak <em>négy lépés.</em></h2></div><p data-reveal>Ne hagyd veszni a középiskolában megszerzett tudást – jelentkezz most!</p></div>
   <ol className="route" data-reveal>{kreta.map(([b,t],i)=><li key={b} style={{'--d':.2+i*.18+'s'}}><span className="route-no">{i+1}</span><b>{b}</b> {t}</li>)}</ol>
  </section>

  <section className="section faq">
   <div><span className="eyebrow" data-reveal>04 — Tudnivalók</span><h2 data-reveal>Jó tudni,<br/><em>mielőtt</em> indulsz.</h2></div>
   <div data-reveal>{notes.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true"/></summary><p>{a}</p></details>)}
    <details><summary>2026-tól változtak a vizsgadíjak<span aria-hidden="true"/></summary><div className="details-body">
     <p>A KAV Közlekedési Alkalmassági és Vizsgaközpont Nonprofit Kft. tájékoztatása szerint az építési és közlekedési miniszter 2026. április 20-án kelt határozata értelmében 2026. július 17-től módosulnak a vizsgáztatási, vizsgálati és egyéb szolgáltatási díjak. A díjtételek átlagosan 11%-kal változnak; a B kategóriás elméleti és gyakorlati vizsgák díjai több mint másfél évtizede változatlanok voltak.</p>
     <p><b>Mit jelent ez egy B kategóriás vizsgázó számára?</b></p>
     <ul><li>Elméleti vizsga: 4 600 Ft → 5 100 Ft (+500 Ft)</li><li>Forgalmi vizsga: 11 000 Ft → 12 200 Ft (+1 200 Ft)</li><li>Összes változás: +1 700 Ft</li></ul>
     <p><a className="text-link" href="https://vizsgakozpont.hu/hirek/altalanos-tajekoztato-a-2026-evi-vizsgadijak-valtozasrol" target="_blank" rel="noreferrer">A Vizsgaközpont tájékoztatója <Arrow/></a></p>
    </div></details>
    <details><summary>Díjköteles lett az automatikus okmánykiállítás<span aria-hidden="true"/></summary><div className="details-body">
     <p>2025. július 1-jétől az automatikus okmánykiállítási eljárás díjköteles (az 1999. évi LXXXIV. törvény 34/A. § (3) bekezdése hatályát vesztette). A díjak (okmánykiállítási díj és postai szolgáltatási díj) megegyeznek a személyes eljárásban alkalmazandó díjakkal. Automata ágon is díjmentes a 25 év alatti ügyfél első „B” kategória megszerzésére irányuló okmánykiállítási eljárása.</p>
     <p><b>Hogyan lehet befizetni?</b> Kizárólag elektronikusan, a SZÜF felületén: <a href="https://magyarorszag.hu" target="_blank" rel="noreferrer">magyarorszag.hu</a> → Okmányok → Vezetői engedély → Életút- és fizetési szolgáltatás. Az online fizetés az OTP SimplePay alkalmazásán keresztül történik.</p>
     <p><b>Meddig fizethetem be?</b> A vezetési jogosultsághoz szükséges minden egyéb előfeltétel nyilvántartásba érkezését követő 30 napon belül. Erről a VEN-rendszer e-mailben és SMS-ben értesít, ha a nyilatkozatokban megadtad az elérhetőségedet; ennek hiányában a fenti szolgáltatásban, KAÜ-s belépés után látod a határidőt. A sikeres fizetésről a VEN-rendszer automatikus visszaigazolást kap, és gondoskodik a kérelem elbírálásáról.</p>
     <p><b>Ha kicsúszol a határidőből vagy sikertelen a befizetés,</b> a kormányablakban személyes eljárásban kell okmánykiállítás iránti kérelmet indítani.</p>
     <p>A 2025. június 30-ig automata ágon el nem indult ügyekben is fennáll a díjfizetési kötelezettség; a korábbi, díjmentes eljárásra tett nyilatkozatokat a VEN-rendszer lezárta, ezeket a SZÜF Életút- és fizetési szolgáltatásban (vagy a kormányablakban, illetve a SZÜF Nyilatkozattétel szolgáltatásban) újra meg kell tenni.</p>
    </div></details>
   </div>
  </section>

  <section className="section motto">
   <blockquote data-reveal><span className="eyebrow">Mottónk</span><p>Magolásból sok pótóra lesz, <em>a tanulásból jogosítvány.</em></p><footer>{leader}, iskolavezető · Képzési engedély: KGHF/41568-1/2019-ITM</footer></blockquote>
   <div className="motto-actions" data-reveal><a className="button red magnetic" href={'tel:'+contact.tel}>Hívj minket: {contact.phone} <Arrow/></a><Link className="button outline-dark magnetic" href="/kapcsolat#jelentkezes">Jelentkezz online <Arrow/></Link></div>
  </section>
 </>;
}
