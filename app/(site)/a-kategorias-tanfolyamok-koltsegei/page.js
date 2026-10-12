import Link from 'next/link';
import {PageHero,Arrow,CatSwitch} from '../chrome';
import {moto,gear,leader,ft} from '../../../content/school';

export const metadata={title:'„A” kategóriák díjai • Hatodik Sebesség Autósiskola',description:'AM, A1 és A kategóriás motoros képzés díjai Szolnokon: e-learning elmélet, gyakorlati óradíjak, vizsgadíjak és a szükséges felszerelés.'};

const blurb={AM:'Segédmotoros kerékpár – már 14 évesen.',A1:'Könnyű motor 125 cm³-ig, vagy B jogosítvánnyal kiegészítve.',A:'Korlátozás nélküli motor – közvetlenül vagy fokozatosan.'};

export default function Page(){
 return <>
  <PageHero gear={3} eyebrow="Díjak · motoros képzés" title={<>Motoros <em>képzés.</em></>} lead="Otthon tanulós, e-learning elmélet, utána irány a pálya és a forgalom. Iskolánk konzulens elméleti oktatót biztosít."><CatSwitch on="A"/></PageHero>

  <section className="section">
   <div className="section-top"><div><span className="eyebrow" data-reveal>01 — Válassz kategóriát</span><h2 data-reveal>A motoros <em>létra.</em></h2></div><p data-reveal>Tandíj, gyakorlat és vizsgadíjak együtt, kategóriánként. A gyakorlat óraszáma a kötelező minimum.</p></div>
   <div className="ladder">{moto.map((m,i)=><article key={m.cat} className="moto-card" data-reveal style={{'--d':i*110+'ms'}}>
    <div className="moto-head"><span className="moto-cat">{m.cat}</span><div className="age-dial" aria-label={`Korhatár forgalmi vizsgán: ${m.age} év`}><svg viewBox="-50 -50 100 70" aria-hidden="true"><path d="M-40 10A40 40 0 1 1 40 10" className="ad-track"/><path d="M-40 10A40 40 0 1 1 40 10" className="ad-fill" pathLength="100" style={{'--to':100-m.age/24*100}}/></svg><b>{m.age}<small>év</small></b></div></div>
    <p className="moto-blurb">{blurb[m.cat]}</p>
    {m.rows.map(r=><div key={r.name} className="moto-row">
     <h3>{r.name}</h3>
     <dl>
      <div><dt>Elméleti díj</dt><dd>{ft(r.theory)}</dd></div>
      <div><dt>Gyakorlat</dt><dd>{r.hours} óra × {ft(r.rate)} = {ft(r.rate*r.hours)}</dd></div>
      <div><dt>Vizsgadíjak</dt><dd>{r.exams.map(([n,p])=><span key={n}>{n}: {ft(p)}</span>)}</dd></div>
     </dl>
     <div className="moto-total"><span>Tandíj és vizsgadíj összesen</span><b>{ft(r.total)}</b></div>
    </div>)}
   </article>)}</div>
   <div className="callout" data-reveal><b>Tantermi képzés:</b> motoros kategóriákban jelenleg nem indítunk tantermi képzést – az elmélet e-learningben, otthonról végezhető.</div>
  </section>

  <section className="section dash-section">
   <div className="section-top"><div><span className="eyebrow light" data-reveal>02 — Felszerelés</span><h2 data-reveal>Mit hozz <em>magaddal?</em></h2></div><p data-reveal>Higiéniai okokból a gyakorlati oktatáson az alábbi felszerelést a tanuló biztosítja.</p></div>
   <ul className="lamps gear-list">{gear.map((g,i)=><li key={g} data-reveal style={{'--d':i*70+'ms'}}><i aria-hidden="true"/>{g}</li>)}</ul>
  </section>

  <section className="section sign"><p data-reveal>{leader}, iskolavezető és ügyvezető</p><Link className="button magnetic" href="/b-kategorias-tanfolyamok-koltsegei" data-reveal>„B” kategória díjai <Arrow/></Link></section>
 </>;
}
