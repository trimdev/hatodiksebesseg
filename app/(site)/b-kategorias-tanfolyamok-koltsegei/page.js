import Link from 'next/link';
import {PageHero,Arrow,CatSwitch} from '../chrome';
import {CostCalculator,CopyButton} from '../widgets';
import {bTheory,bRates,bExams,bank,payment,extras,firstAidExempt,subsidy,subsidyWho,leader,ft} from '../../../content/school';

export const metadata={title:'„B” kategória díjai • Hatodik Sebesség Autósiskola',description:'B kategóriás tanfolyam díjai Szolnokon: tantermi és e-learning elmélet, gyakorlati óradíjak, vizsgadíjak, költségkalkulátor.'};

export default function Page(){
 return <>
  <PageHero gear={2} eyebrow="Díjak · B kategória" title={<>„B” kategória <em>díjai.</em></>} lead="Minden költség egy helyen – és egy kalkulátor, amivel kiszámolhatod a saját utadat a jogosítványig."><CatSwitch on="B"/></PageHero>

  <section className="section calc-section">
   <div className="section-top"><div><span className="eyebrow" data-reveal>01 — Kalkulátor</span><h2 data-reveal>Mennyibe kerül<br/><em>a te</em> jogsid?</h2></div><p data-reveal>Állítsd be az elméletet, az óradíjat és az órák számát – a mutató azonnal kitér.</p></div>
   <div data-reveal><CostCalculator/></div>
  </section>

  <section className="section prices">
   <div className="section-top"><div><span className="eyebrow" data-reveal>02 — Elméleti képzés</span><h2 data-reveal>KRESZ, ahogy <em>neked</em> kényelmes.</h2></div></div>
   <div className="price-grid">{bTheory.map((t,i)=><article key={t.id} data-reveal style={{'--d':(i%3)*80+'ms'}}><h3>{t.name}</h3><b className="price">{ft(t.price)}</b>{t.makeup?<p>Hiányzás pótlása: {ft(t.makeup)}/óra · egy elméleti óra 45 perc</p>:<p>Iskolánk konzulens elméleti oktatót biztosít.</p>}</article>)}</div>
   <div className="callout" data-reveal><b>Figyelem!</b> {subsidy} {subsidyWho}</div>
  </section>

  <section className="section prices alt">
   <div className="section-top"><div><span className="eyebrow" data-reveal>03 — Gyakorlat</span><h2 data-reveal>Óradíjak <em>(pótóra is).</em></h2></div><p data-reveal>Egy gyakorlati óra 50 perc. Speciális esetben egyénileg megállapított óradíj is lehetséges – ezt egyeztetés után tudjuk meghatározni.</p></div>
   <ul className="rate-list" data-reveal>{bRates.map(r=><li key={r.id}><span>{r.name}</span><i aria-hidden="true"/><b>{ft(r.price)}<small>/óra</small></b></li>)}</ul>
  </section>

  <section className="section prices">
   <div className="two-col">
    <div>
     <span className="eyebrow" data-reveal>04 — Vizsgadíjak</span>
     <ul className="rate-list compact" data-reveal>{bExams.map(([n,p])=><li key={n}><span>{n}</span><i aria-hidden="true"/><b>{ft(p)}<small>/vizsga</small></b></li>)}</ul>
     <span className="eyebrow" data-reveal style={{marginTop:56}}>05 — További költségek</span>
     <ul className="rate-list compact" data-reveal>{extras.map(([n,p])=><li key={n}><span>{n}</span><i aria-hidden="true"/><b className="small-b">{p}</b></li>)}</ul>
     <p className="fine" data-reveal>Az elsősegély-nyújtási vizsga nem tanfolyamköteles, de igény szerint iskolánk elsősegély-nyújtási oktatást szervez. Vidéken szervezett tanfolyam áráról mindig az adott tanfolyam során tájékoztatunk.</p>
    </div>
    <div>
     <span className="eyebrow" data-reveal>06 — Utalási segédlet</span>
     <div className="bank-card" data-reveal>
      <span className="bank-chip" aria-hidden="true"/>
      <small>Kedvezményezett</small><p>{bank.name}</p>
      <small>Számlaszám · {bank.bankName}</small><p className="bank-acc">{bank.account} <CopyButton text={bank.account.replace(/-/g,'')}/></p>
      <small>Közlemény</small><p>{bank.memo}</p>
     </div>
     <h3 className="mini-h" data-reveal>Befizetés módja</h3>
     <ul className="ticks" data-reveal>{payment.map(p=><li key={p}>{p}</li>)}</ul>
    </div>
   </div>
  </section>

  <section className="section faq">
   <div><span className="eyebrow" data-reveal>07 — Elsősegély-igazolás</span><h2 data-reveal>Kell-e <em>elsősegély</em>-vizsga?</h2><p data-reveal>A jogosítvány kiadásához az okmányirodában be kell mutatni az elsősegély-nyújtási ismeretekről szóló igazolást (egészségügyi végzettséget igazoló kártyát).</p></div>
   <div data-reveal>
    <details><summary>Nem kell, ha ilyen végzettséged van<span aria-hidden="true"/></summary><div className="details-body"><p>A vonatkozó egészségügyi miniszteri rendelet alapján nem szükséges az igazolás, ha rendelkezel az alábbiak valamelyikével:</p><ul className="cols">{firstAidExempt.map(x=><li key={x}>{x}</li>)}</ul></div></details>
    <details><summary>Nem kell, ha korábban már szereztél jogosítványt<span aria-hidden="true"/></summary><div className="details-body"><p>Nem szükséges az igazolás annak, aki 1984. január 1-je után bármely járműkategóriában vezetői engedélyt, vagy segédmotoros kerékpár, lassú jármű kategóriában járművezetői igazolványt szerzett; illetve aki 1969. július 1-je és 1983. december 31-e között „D” vagy „trolibusz” kategóriára szerzett vezetői, járművezetői engedélyt.</p></div></details>
   </div>
  </section>

  <section className="section sign"><p data-reveal>{leader}, iskolavezető és ügyvezető</p><Link className="button magnetic" href="/a-kategorias-tanfolyamok-koltsegei" data-reveal>Motoros díjak <Arrow/></Link></section>
 </>;
}
