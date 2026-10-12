'use client';
import {useState,useEffect,useRef,useMemo} from 'react';
import {bTheory,bRates,bExams,hours,lunch,instructors,contact,kpi,ft,statusAt} from '../../content/school';

const pct=n=>n==null?'–':n.toLocaleString('hu-HU',{maximumFractionDigits:2})+'%';

// eases a displayed number toward its target so totals roll like an odometer
function useRolling(target){
 const[v,setV]=useState(target);const cur=useRef(target);
 useEffect(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){cur.current=target;setV(target);return}
  let raf;const from=cur.current,t0=performance.now();
  const step=now=>{const k=Math.min(1,(now-t0)/600),e=1-(1-k)**3;cur.current=from+(target-from)*e;setV(Math.round(cur.current));if(k<1)raf=requestAnimationFrame(step)};
  raf=requestAnimationFrame(step);return()=>cancelAnimationFrame(raf);
 },[target]);
 return v;
}

// ---------- B kategória költségkalkulátor ----------
const examTotal=bExams.reduce((s,[,p])=>s+p,0);
const MAX=Math.max(...bTheory.map(t=>t.price))+Math.max(...bRates.map(r=>r.price))*60+examTotal;
export function CostCalculator(){
 const[theory,setTheory]=useState('szolnok');const[rate,setRate]=useState('normal');const[h,setH]=useState(30);
 const[exams,setExams]=useState(true);const[subsidy,setSubsidy]=useState(false);
 const T=bTheory.find(t=>t.id===theory),R=bRates.find(r=>r.id===rate);
 const parts=[['Elméleti képzés',T.price],[`Gyakorlat · ${h} óra × ${ft(R.price)}`,R.price*h],...(exams?[['Vizsgadíjak (elmélet + forgalmi)',examTotal]]:[]),...(subsidy?[['Állami támogatás (visszaigényelve)',-25000]]:[])];
 const total=parts.reduce((s,[,p])=>s+p,0),shown=useRolling(total);
 const ang=-120+240*Math.min(1,total/MAX);
 return <div className="calc">
  <div className="calc-form">
   <fieldset><legend>1. Elméleti képzés</legend>
    <div className="calc-options">{bTheory.map(t=><label key={t.id} className={'opt'+(theory===t.id?' on':'')}><input type="radio" name="theory" value={t.id} checked={theory===t.id} onChange={()=>setTheory(t.id)}/><span>{t.name}</span><b>{ft(t.price)}</b></label>)}</div>
   </fieldset>
   <fieldset><legend>2. Gyakorlati óradíj</legend>
    <select value={rate} onChange={e=>setRate(e.target.value)} aria-label="Óradíj típusa">{bRates.map(r=><option key={r.id} value={r.id}>{r.name} – {ft(r.price)}/óra</option>)}</select>
   </fieldset>
   <fieldset><legend>3. Gyakorlati órák száma <output>{h} óra</output></legend>
    <input type="range" min="1" max="60" value={h} onChange={e=>setH(+e.target.value)} aria-label="Gyakorlati órák száma" style={{'--fill':(h-1)/59*100+'%'}}/>
    <div className="range-scale" aria-hidden="true"><span>1</span><span>20</span><span>40</span><span>60</span></div>
   </fieldset>
   <div className="calc-toggles">
    <label className="switch"><input type="checkbox" checked={exams} onChange={e=>setExams(e.target.checked)}/><i/>Vizsgadíjakkal együtt</label>
    <label className="switch"><input type="checkbox" checked={subsidy} onChange={e=>setSubsidy(e.target.checked)}/><i/>Jár nekem a 25 000 Ft-os állami támogatás</label>
   </div>
  </div>
  <div className="calc-dash" aria-live="polite">
   <svg className="calc-gauge" viewBox="-100 -100 200 150" aria-hidden="true">
    <path className="g-track" d="M-69.3 40A80 80 0 1 1 69.3 40"/>
    <path className="g-fill" d="M-69.3 40A80 80 0 1 1 69.3 40" pathLength="100" style={{strokeDashoffset:100-Math.min(1,total/MAX)*100}}/>
    {Array.from({length:13},(_,i)=>{const a=(-210+20*i)*Math.PI/180;return <line key={i} x1={Math.cos(a)*62} y1={Math.sin(a)*62} x2={Math.cos(a)*(i%3?66:70)} y2={Math.sin(a)*(i%3?66:70)}/>})}
    <line className="g-needle" x1="0" y1="6" x2="0" y2="-64" style={{transform:`rotate(${ang}deg)`}}/><circle r="5" className="g-hub"/>
   </svg>
   <span className="calc-label">Becsült összeg</span>
   <b className="calc-total">{ft(shown)}</b>
   <ul className="calc-parts">{parts.map(([n,p])=><li key={n}><span>{n}</span><b>{p<0?'−'+ft(-p):ft(p)}</b></li>)}</ul>
   <p className="calc-note">Tájékoztató számítás a jelenlegi díjakkal. A szükséges óraszám tanulónként eltér; az elsősegély-vizsga és a jogosítvány kiállításának díja nincs benne.</p>
  </div>
 </div>;
}

// ---------- Oktatók szűrővel ----------
const initials=n=>n.replace('ifj. ','').split(/[ -]/).map(w=>w[0]).slice(0,2).join('');
const filters=[['all','Mind'],['auto','Automata váltó'],['lang','Idegen nyelven is']];
export function Instructors(){
 const[f,setF]=useState('all');const[q,setQ]=useState('');
 const list=useMemo(()=>{const s=q.trim().toLowerCase();return instructors.filter(i=>(f==='all'||i[f])&&(!s||(i.name+' '+i.cars.join(' ')).toLowerCase().includes(s)))},[f,q]);
 return <>
  <div className="filter-bar">
   <div className="chips" role="group" aria-label="Szűrés">{filters.map(([k,n])=><button key={k} aria-pressed={f===k} className={f===k?'on':''} onClick={()=>setF(k)}>{n}<small>{k==='all'?instructors.length:instructors.filter(i=>i[k]).length}</small></button>)}</div>
   <label className="search"><span className="sr-only">Keresés név vagy autó szerint</span><input type="search" placeholder="Név vagy autó, pl. Golf" value={q} onChange={e=>setQ(e.target.value)}/></label>
  </div>
  <p className="sr-only" aria-live="polite">{list.length} oktató</p>
  <div className="crew">{list.map((i,k)=><article key={i.name} className={i.away?'away':''} data-reveal style={{'--d':(k%3)*80+'ms'}}>
   <div className="crew-photo">{i.photo?<img src={`/assets/oktatok/${i.photo}.jpg`} alt={i.name+' az oktatóautójával'} loading="lazy"/>:<span className="monogram" aria-hidden="true">{initials(i.name)}</span>}
    <div className="crew-badges">{i.auto&&<span className="b-auto">Automata</span>}{i.lang?.map(l=><span key={l}>{l==='angol'?'English':l==='német'?'Deutsch':'Română'}</span>)}</div>
   </div>
   <h3>{i.name}</h3>
   <ul>{i.cars.map(c=><li key={c}>{c}</li>)}{i.note&&<li className="crew-note">{i.note}</li>}</ul>
   {i.away&&<p className="crew-away">{i.away}</p>}
  </article>)}</div>
  {!list.length&&<p className="empty">Nincs találat. <button className="text-link" onClick={()=>{setF('all');setQ('')}}>Szűrők törlése</button></p>}
 </>;
}

// ---------- Nyitvatartás élőben (budapesti idő) ----------
function budapestNow(){
 const p=Object.fromEntries(new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Budapest',weekday:'short',hour:'numeric',minute:'numeric',hourCycle:'h23'}).formatToParts(new Date()).map(x=>[x.type,x.value]));
 return{day:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].indexOf(p.weekday),t:+p.hour+p.minute/60};
}
export function OpenStatus(){
 const[now,setNow]=useState(null);
 useEffect(()=>{const tick=()=>setNow(budapestNow());tick();const id=setInterval(tick,30000);return()=>clearInterval(id)},[]);
 const st=now&&statusAt(now.day,now.t);
 const S=8,E=18,x=v=>(v-S)/(E-S)*100+'%';
 return <div className="hours-card">
  <div className="status">
   <div className={'lights '+(st?.s||'')} aria-hidden="true"><i/><i/><i/></div>
   <div><b>{st?st.text:'Nyitvatartás'}</b><span>{st?st.sub:'Hétfőtől péntekig'}</span></div>
  </div>
  <ul className="week">{hours.map(([d,o,c],i)=><li key={d} className={now?.day===i?'today':''}>
   <span>{d}</span>
   <div className="bar" aria-hidden="true"><i style={{left:x(o),width:`calc(${x(c)} - ${x(o)})`}}/><em style={{left:x(lunch[0]),width:`calc(${x(lunch[1])} - ${x(lunch[0])})`}}/>{now?.day===i&&now.t>=S&&now.t<=E&&<u style={{left:x(now.t)}}/>}</div>
   <b>{o}–{c}</b>
  </li>)}<li className="weekend"><span>Hétvége</span><div className="bar" aria-hidden="true"/><b>zárva</b></li></ul>
  <p className="hours-foot">Ebédidő minden nap 13:00–13:30. Ünnepnapokon és szabadság idején eltérhet – ezt a főoldali hírekben jelezzük.</p>
 </div>;
}

// ---------- Jelentkezés (e-mailt nyit, nincs szerveroldali tárolás) ----------
export function ApplyForm(){
 const[sent,setSent]=useState(false);
 const submit=e=>{
  e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget));
  const body=`Név: ${d.name}\nE-mail: ${d.email}\nTelefon: ${d.phone}\nKategória: ${d.cat}\nKépzés típusa: ${d.kind}\n\n${d.msg||''}`;
  location.href=`mailto:${contact.email}?subject=${encodeURIComponent('Jelentkezés / érdeklődés – '+d.name)}&body=${encodeURIComponent(body)}`;setSent(true);
 };
 return <form className="apply" onSubmit={submit}>
  <div className="apply-row"><label>Név<input name="name" required autoComplete="name"/></label><label>Telefon<input name="phone" type="tel" required autoComplete="tel"/></label></div>
  <label>E-mail<input name="email" type="email" required autoComplete="email"/></label>
  <fieldset><legend>Melyik kategória?</legend><div className="seg">{['B','A','A1','AM'].map((c,i)=><label key={c}><input type="radio" name="cat" value={c} defaultChecked={!i}/><span>{c}</span></label>)}</div></fieldset>
  <fieldset><legend>Képzés típusa</legend><div className="seg">{['tantermi','online'].map((c,i)=><label key={c}><input type="radio" name="kind" value={c} defaultChecked={!i}/><span>{c}</span></label>)}</div></fieldset>
  <label>Üzenet<textarea name="msg" rows={4} placeholder="Mikor kezdenéd, van-e már orvosi alkalmasságid, kérdések…"/></label>
  <label className="consent"><input type="checkbox" required/><span>Megértettem és elfogadom az <a href="/adatkezelesi-tajekoztato" target="_blank">adatkezelési tájékoztatót</a>.</span></label>
  <button className="button red magnetic">Küldés <span className="arr" aria-hidden="true">↗</span></button>
  {sent&&<p className="apply-sent" role="status">Megnyitottuk a levelezőprogramodat – ott csak a Küldés gombra kell kattintanod. Ha nem nyílt meg, írj a {contact.email} címre.</p>}
 </form>;
}

// ---------- Adatközlés diagram: VSM elmélet / gyakorlat ----------
const SERIES=[['VSM elmélet',2,'#3b52c4'],['VSM gyakorlat',3,'#e3352b']];
export function KpiChart(){
 const W=760,H=300,L=44,R=96,T=16,B=34,n=kpi.length;
 const X=i=>L+i*(W-L-R)/(n-1),Y=v=>T+(1-v/100)*(H-T-B);
 const[hover,setHover]=useState(null);const svg=useRef(null);
 const path=k=>kpi.map((r,i)=>r[k]==null?null:[X(i),Y(r[k])]).reduce((d,p,i,a)=>p?d+(a[i-1]?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1):d,'');
 const pick=e=>{const r=svg.current.getBoundingClientRect(),vx=(e.clientX-r.left)/r.width*W;setHover(Math.max(0,Math.min(n-1,Math.round((vx-L)/((W-L-R)/(n-1))))))};
 const key=e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();setHover(h=>Math.max(0,Math.min(n-1,(h??n-1)+(e.key==='ArrowRight'?1:-1))))}};
 const last=kpi[n-1],hv=hover!=null&&kpi[hover];
 return <figure className="kpi-chart">
  <div className="legend">{SERIES.map(([nm,,c])=><span key={nm}><i style={{background:c}}/>{nm}</span>)}</div>
  <div className="chart-box">
   <svg ref={svg} viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Vizsgasikerességi mutatók negyedévente, 2019–2026. A pontos értékek az alábbi táblázatban." tabIndex={0} onPointerMove={pick} onPointerLeave={()=>setHover(null)} onKeyDown={key} onBlur={()=>setHover(null)}>
    {[0,25,50,75,100].map(v=><g key={v} className="grid"><line x1={L} x2={W-R} y1={Y(v)} y2={Y(v)}/><text x={L-8} y={Y(v)+4}>{v}%</text></g>)}
    {kpi.map((r,i)=>r[1]===1||i===0?<text key={i} className="xlab" x={X(i)} y={H-10}>{r[0]}</text>:null)}
    {hover!=null&&<line className="cross" x1={X(hover)} x2={X(hover)} y1={T} y2={H-B}/>}
    {SERIES.map(([nm,k,c])=><g key={nm}><path d={path(k)} stroke={c} className="series"/>
     {hover!=null&&kpi[hover][k]!=null&&<circle cx={X(hover)} cy={Y(kpi[hover][k])} r="5" fill={c} className="dot"/>}
     <text className="direct" x={X(n-1)+10} y={Y(last[k])+4}>{nm.replace('VSM ','')}</text></g>)}
   </svg>
   {hv&&<div className="tip" style={{left:`${X(hover)/W*100}%`}}><span>{hv[0]}. {hv[1]}. negyedév</span>{SERIES.map(([nm,k,c])=><p key={nm}><i style={{background:c}}/><b>{pct(hv[k])}</b>{nm}</p>)}</div>}
  </div>
  <figcaption>Vigye az egeret a diagram fölé (vagy használja a nyílbillentyűket) a negyedéves értékekhez.</figcaption>
 </figure>;
}

export function CopyButton({text,label='Másolás'}){
 const[ok,setOk]=useState(false);
 return <button type="button" className="copy" onClick={()=>navigator.clipboard?.writeText(text).then(()=>{setOk(true);setTimeout(()=>setOk(false),1600)})}>{ok?'Másolva ✓':label}</button>;
}
