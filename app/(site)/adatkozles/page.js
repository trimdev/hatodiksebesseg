import {PageHero} from '../chrome';
import {KpiChart} from '../widgets';
import {kpi} from '../../../content/school';

export const metadata={title:'Adatközlés • Hatodik Sebesség Autósiskola',description:'A Hatodik Sebesség Autósiskola B kategóriás vizsgasikerességi mutatói (VSM), átlagos képzési óraszáma (ÁKÓ) és képzési költsége (KK) negyedévente.'};

const pct=v=>v==null?'–':v.toLocaleString('hu-HU',{maximumFractionDigits:2})+'%';
const kk=v=>typeof v==='number'?v.toLocaleString('hu-HU',{useGrouping:'always'})+' Ft':v;
const terms=[['VSM','Vizsgasikerességi mutató – a sikeres vizsgák aránya az összes vizsgához képest, elméletből és gyakorlatból.'],['ÁKÓ','Átlagos képzési óraszám – a tanulók által ténylegesen levett gyakorlati órák átlaga a kötelező minimum százalékában.'],['KK','Képzési költség – a tanfolyam díja az adott negyedévben.']];

export default function Page(){
 const last=kpi[kpi.length-1];
 const years=[...new Set(kpi.map(r=>r[0]))].reverse();
 return <>
  <PageHero eyebrow="Adatközlés · B kategória" title={<>Számokban <em>is</em> átlátható.</>} lead="A jogszabály által előírt mutatóink negyedévente, 2019 óta."/>
  <section className="section">
   <span className="eyebrow" data-reveal>Legfrissebb · {last[0]}. {last[1]}. negyedév</span>
   <div className="stat-tiles">{[['VSM elmélet',pct(last[2])],['VSM gyakorlat',pct(last[3])],['ÁKÓ',pct(last[4])],['KK',kk(last[5])]].map(([k,v],i)=><div key={k} data-reveal style={{'--d':i*80+'ms'}}><span>{k}</span><b>{v}</b></div>)}</div>
   <div data-reveal><KpiChart/></div>
   <dl className="terms" data-reveal>{terms.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
  </section>
  <section className="section kpi-tables">
   <span className="eyebrow" data-reveal>Minden negyedév</span>
   {years.map(y=>{const rows=kpi.filter(r=>r[0]===y);return <div className="table-wrap" key={y} data-reveal><table>
    <caption>{y}</caption>
    <thead><tr><th scope="col">Mutató</th>{rows.map(r=><th key={r[1]} scope="col">{r[1]}. negyedév</th>)}</tr></thead>
    <tbody>{[['VSM elmélet',2,pct],['VSM gyakorlat',3,pct],['ÁKÓ',4,pct],['KK',5,kk]].map(([n,k,f])=><tr key={n}><th scope="row">{n}</th>{rows.map(r=><td key={r[1]}>{f(r[k])}</td>)}</tr>)}</tbody>
   </table></div>})}
  </section>
 </>;
}
