'use client';
import {useState,useEffect,useRef} from 'react';
import {flushSync} from 'react-dom';
import Link from 'next/link';
import {Arrow} from './chrome';
import {News} from './news';
import {instructors} from '../../content/school';

const heroPhotos=instructors.filter(i=>i.photo);

const statement='Nem kell mindent tudnod az elején. Csak hozd a kíváncsiságod – a többit együtt tanuljuk meg, a saját tempódban.';
const courses={
 B:{name:'Személyautó',kind:'B kategória',title:'Ülj a vezetőülésbe.',text:'A hétköznapi szabadság a volán mögött kezdődik. Érthető elmélet, személyre szabott gyakorlat és egy oktató, akire számíthatsz.',items:['Online vagy tantermi KRESZ','Manuális vagy automata váltó','Modern, klimatizált autók','Rugalmas időbeosztás']},
 A:{name:'Motorkerékpár',kind:'A kategória',title:'Két kerék. Végtelen élmény.',text:'Ismerd meg a motorozás szabadságát. Az első alapoktól a tudatos közúti közlekedésig segítünk fejlődni.',items:['Online vagy tantermi KRESZ','Kategóriádhoz illő képzés','Gyors gyakorlati képzés','Kamatmentes részletfizetés']},
};
const gears=[
 ['Jelentkezés','Beszéljük meg.','Megtaláljuk a hozzád illő képzést, és végigvezetünk a beiratkozáson. Csak az orvosi alkalmassági kell hozzá.'],
 ['Elmélet','Értsd az utat.','KRESZ online, a saját ritmusodban, vagy tanteremben, kis csoportban – ahogy neked kényelmes.'],
 ['KRESZ-vizsga','Az első zöld lámpa.','A sikeres elméleti vizsga után jöhet a volán. Innen már minden órán vezetsz.'],
 ['Első órák','Szerezz rutint.','Nyugodt helyen, az alapoktól: indulás, váltás, parkolás. Addig gyakorlunk, amíg magától megy.'],
 ['Forgalom','Irány a város.','Szolnok utcáin, egyre több önállósággal. Az oktatód melletted ül, de a döntés már a tiéd.'],
 ['Forgalmi vizsga','Hatodik sebesség.','Egy utolsó, magabiztos kör – és már te vezetsz. Szabadon, bárhová.'],
];
const faqs=[['Tanulhatok online KRESZ-t?','Igen, e-learning képzést is választhatsz a tantermi oktatás helyett. Igény esetén személyes konzultációval is segítünk.'],['Van lehetőség részletfizetésre?','Igen, kamatmentes részletfizetés is elérhető. A hozzád illő ütemezést a beiratkozáskor egyeztetjük.'],['Automata autóval is tanulhatok?','Igen, igény esetén automata váltós autóval is folyik oktatás. Az elérhetőségről érdeklődj az irodánknál.'],['Mire van szükségem a beiratkozáshoz?','A jelentkezés előtt kérjük, szerezd be az orvosi alkalmassági igazolást. A szükséges iratokról és a választott kategória feltételeiről telefonon adunk pontos tájékoztatást.'],['Középiskolában végeztem a KRESZ-tanfolyamot. Mi a teendő?','Már csak pár lépés választ el a jogosítványtól: töltsd le a Kréta rendszerből az e-jogsi igazolást, küldd el nekünk e-mailben, válassz a fizetési lehetőségek közül (részletfizetés is van!), és már kezdheted is a vezetést – várakozás nélkül.'],['Öcsödön lakom. Honnan indulhat a gyakorlati óra?','Nálunk már a kunszentmártoni indulás is elérhető a gyakorlati oktatás során. Öcsödön és Mesterszálláson tantermi KRESZ-tanfolyamot is indítunk.'],['Adhatok ajándékba jogosítványt?','Igen. Különböző programcsomagokból választhatsz az utalványhoz – keress minket e-mailben vagy személyesen.']];

// H-pattern: gear n → [column -1..1, row -1 top / 1 bottom]
const gearPos=n=>[Math.floor((n-1)/2)-1,n%2?-1:1];
const ease=u=>u<.5?4*u*u*u:1-(-2*u+2)**3/2;
// knob position for continuous t∈[0,5]: hold in gear, then shift via neutral like a real gate
function knobAt(t){
 const seg=Math.min(4,Math.floor(t)),f=t-seg,a=gearPos(seg+1),b=gearPos(seg+2);
 if(f<.45)return a;if(f>.85)return b;
 const pts=[a,[a[0],0],[b[0],0],b],len=[1,Math.abs(b[0]-a[0]),1],total=len[0]+len[1]+len[2];
 let d=ease((f-.45)/.4)*total;
 for(let i=0;i<3;i++){if(d<=len[i]||i===2){const k=len[i]?Math.min(1,d/len[i]):1;return[pts[i][0]+(pts[i+1][0]-pts[i][0])*k,pts[i][1]+(pts[i+1][1]-pts[i][1])*k]}d-=len[i]}
}
// revs climb while in gear, drop through the shift
const rpmAt=t=>{const f=t-Math.min(4,Math.floor(t));return f<.45?1800+4700*f/.45:f<.85?6500-4700*(f-.45)/.4:1800};

// road dashes move DASH units every ROAD_T seconds; a wheel of radius r must turn once per 2πr/DASH·ROAD_T
const DASH=60,ROAD_T=.45;
function Wheel({x,y,r}){return <g transform={`translate(${x} ${y})`}><g className="wheel" style={{'--rev':(2*Math.PI*r/DASH*ROAD_T).toFixed(3)+'s'}}><circle r={r}/><circle r={r*.58}/><circle r={r*.14} className="hub"/>{[0,72,144,216,288].map(a=><line key={a} y1={-r*.2} y2={-r*.55} transform={`rotate(${a})`}/>)}</g></g>}
function Vehicle({type}){
 return <svg className="vehicle" viewBox="0 0 420 170" aria-hidden="true">
  <line className="road" x1="-900" x2="1320" y1={type==='B'?157:161} y2={type==='B'?157:161} style={{'--road':ROAD_T+'s'}}/>
  <g className="shadow"><ellipse cx="210" cy={type==='B'?156:160} rx="190" ry="6"/></g>
  {type==='B'?<g className="body">
   {/* drawn facing left; mirrored so it faces the way it drives (wheels sit symmetric, so they stay outside the flip) */}
   <g transform="matrix(-1 0 0 1 420 0)">
   <rect x="196" y="24" width="56" height="14" rx="3" className="accent-fill"/>
   <path d="M28 128V104Q30 90 48 86L118 78 160 44Q168 38 180 38H276Q292 38 302 48L338 80 376 88Q394 92 396 108V128H352A34 34 0 0 0 284 128H136A34 34 0 0 0 68 128Z"/>
   <path className="glass" d="M130 78 166 48Q172 44 180 44H228V78ZM238 44H272Q284 44 292 52L318 78H238Z"/>
   <path d="M234 84V122M250 94H266M378 96 394 100M30 98H42"/><path className="accent" d="M52 112H382"/>
   </g>
   <Wheel x={102} y={128} r={28}/><Wheel x={318} y={128} r={28}/>
  </g>:<g className="body">
   <path d="M118 74Q150 64 182 76L184 86Q150 88 124 86ZM118 74 92 66 98 80Z"/>
   <path className="accent-fill" d="M178 76Q200 56 256 62L272 78Q230 90 186 88Z"/>
   <path d="M190 92H256L262 120H198ZM186 88 200 120M256 62 292 56M96 126 200 116M322 126 292 52M280 46 304 40 316 46M300 94A38 38 0 0 1 352 104"/>
   <circle cx="306" cy="72" r="9" className="glass"/><path className="accent" d="M198 122Q150 132 108 112"/>
   <Wheel x={96} y={126} r={34}/><Wheel x={322} y={126} r={34}/>
  </g>}
  <g className="speed">{[40,70,100].map((y,i)=><line key={y} x1="0" x2="60" y1={y} y2={y} style={{'--i':i}}/>)}</g>
 </svg>;
}

export default function Site({news,office}){
 const feed=[...news].sort((a,b)=>b.date.localeCompare(a.date)),urgent=feed.find(n=>n.urgent);
 const[course,setCourse]=useState('B');
 const[gear,setGear]=useState(1);const box=useRef(null);
 const[photo,setPhoto]=useState(0);
 useEffect(()=>{if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const t=setInterval(()=>setPhoto(p=>(p+1)%heroPhotos.length),5000);return()=>clearInterval(t)},[]);

 useEffect(()=>{
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const words=document.querySelector('.statement'),hero=document.querySelector('.hero'),gb=box.current;
  const knob=gb.querySelector('.knob'),needle=gb.querySelector('.needle'),rpm=gb.querySelector('.rpm-val'),kmh=gb.querySelector('.kmh-val');
  const prog=(el,start,end)=>{const r=el.getBoundingClientRect();return Math.min(1,Math.max(0,(innerHeight*start-r.top)/(innerHeight*(start-end))))};
  let raf=0;
  const tick=()=>{raf=0;
   if(words)words.style.setProperty('--p',reduce?1:prog(words,.85,.25).toFixed(3));
   if(hero&&!reduce)hero.style.setProperty('--hy',Math.min(scrollY,innerHeight).toFixed(0));
   const r=gb.getBoundingClientRect();target=Math.min(1,Math.max(0,-r.top/(gb.offsetHeight-innerHeight)))*5;
   if(reduce||Math.abs(target-cur)>2.5)cur=target; // big jumps (links, reload) snap instead of spinning through gears
   if(r.bottom>0&&r.top<innerHeight)drive();
  };
  // ease the gearbox toward the scroll position so wheel/trackpad steps become one smooth motion
  let target=0,cur=0,last=0,gRaf=0;
  const drive=()=>{if(!gRaf){last=performance.now();gRaf=requestAnimationFrame(step)}};
  const step=now=>{gRaf=0;const dt=Math.min(64,now-last);last=now;
   cur+=(target-cur)*(1-Math.exp(-dt/110));if(Math.abs(target-cur)<.0005)cur=target;
   const[x,y]=knobAt(cur),rv=rpmAt(cur);
   knob.style.transform=`translate3d(${x*117.65}%,${y*117.65}%,0)`;
   needle.style.transform=`rotate(${-120+240*rv/8000}deg)`;
   rpm.textContent=(rv/1000).toFixed(1);kmh.textContent=Math.round(cur/5*130);
   gb.style.setProperty('--t',(cur/5).toFixed(4));
   setGear(Math.min(6,Math.floor(cur+.35)+1));
   if(cur!==target)gRaf=requestAnimationFrame(step);
  };
  const onScroll=()=>{if(!raf)raf=requestAnimationFrame(tick)};
  tick();addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll);
  return()=>{removeEventListener('scroll',onScroll);removeEventListener('resize',onScroll);cancelAnimationFrame(raf);cancelAnimationFrame(gRaf)};
 },[]);

 const goGear=n=>{const gb=box.current;scrollTo({top:gb.offsetTop+(gb.offsetHeight-innerHeight)*(n-1)/5+2,behavior:'smooth'})};

 return <>
 <section className="hero">
  <div className="hero-road" aria-hidden="true"><div className="road-plane"><div className="road-dashes"/></div></div>
  <div className="hero-inner">
   <div className="hero-copy">
    {urgent?<a className="announce rise" style={{'--d':'.1s'}} href="#hirek"><span className="announce-tag"><i className="pulse"/>{urgent.tag}</span><span className="announce-text">{urgent.title}</span><Arrow/></a>
    :<span className="eyebrow light rise" style={{'--d':'.1s'}}><i className="pulse"/>Szolnok · A és B kategória</span>}
    <h1><span className="line"><span style={{'--d':'.2s'}}>A szabadság</span></span><span className="line"><span style={{'--d':'.32s'}}>nálad <em>kezdődik.</em></span></span></h1>
    <p className="rise" style={{'--d':'.55s'}}>Az első indulástól a magabiztos vezetésig. Mi melletted ülünk – az út a tiéd.</p>
    <div className="hero-actions rise" style={{'--d':'.7s'}}><a className="button red magnetic" href="#kepzesek">Megtalálom a képzésem <Arrow/></a><a className="ghost" href="#utvonal">Hogyan működik?</a></div>
   </div>
   <figure className="hero-photo">
    <div className="photo-frame">{heroPhotos.map((p,i)=><img key={p.photo} className={i===photo?'on':undefined} src={`/assets/oktatok/${p.photo}.jpg`} alt={i===photo?p.name+' oktató a Hatodik Sebesség oktatóautójával':''} aria-hidden={i!==photo||undefined} fetchPriority={i?undefined:'high'}/>)}</div>
    <div className="float-card one"><b>0%</b><span>kamatmentes<br/>részletfizetés</span></div>
    <div className="float-card two"><i className="pulse"/><span>Automata autó<br/>is választható</span></div>
   </figure>
  </div>
  <a className="scroll-cue" href="#elmeny"><span>Görgess, és indulj el</span><i/></a>
 </section>

 <div className="ticker" aria-hidden="true"><div className="ticker-track">{[0,1].map(k=><span key={k}>{['Online vagy tantermi KRESZ','Manuális és automata autók','Kamatmentes részletfizetés','Kis létszámú csoportok','Rugalmas időbeosztás','Azonnal kezdhető gyakorlat'].map(t=><b key={t}>{t}<i>6</i></b>)}</span>)}</div></div>

 <section className="news" id="hirek" aria-labelledby="hirek-cim">
  <div className="news-head"><div><span className="eyebrow" data-reveal><i className="pulse"/>Aktuális</span><h2 id="hirek-cim" data-reveal>Friss hírek <em>az irodából.</em></h2></div><div className="news-side" data-reveal><p>Nyitvatartás, elmaradó órák, vizsgadíjak – minden, amiről tudnod kell.</p><div className="rail-nav">{[-1,1].map(d=><button key={d} aria-label={d<0?'Előző hírek':'Következő hírek'} onClick={()=>{const r=document.querySelector('.news-rail');r.scrollBy({left:d*r.clientWidth*.7,behavior:'smooth'})}}>{d<0?'←':'→'}</button>)}</div></div></div>
  <News news={news} office={office}/>
 </section>

 <section className="section intro" id="elmeny">
  <span className="eyebrow" data-reveal>01 — Jó helyen kezdődik az utad</span>
  <p className="statement" aria-label={statement}>{statement.split(' ').map((w,i,a)=><span key={i} aria-hidden="true" style={{'--i':i,'--n':a.length}}>{w} </span>)}</p>
  <div className="facts">{[['Kis csoportok','Több figyelem jut rád, és bátran kérdezhetsz.'],['Rugalmas órarend','Az órákat a te napirendedhez igazítjuk.'],['Modern autók','Klimatizált oktatóautók, manuális és automata váltóval.'],['Gyors gyakorlat','Sikeres KRESZ-vizsga után azonnal, várakozás nélkül autóba ülhetsz!']].map(([t,p],i)=><article key={t} data-reveal style={{'--d':i*90+'ms'}}><span className="fact-no">0{i+1}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
 </section>

 <section className="section courses" id="kepzesek">
  <div className="section-top"><div><span className="eyebrow" data-reveal>02 — Válassz irányt</span><h2 data-reveal>Négy kerék<br/>vagy <em>kettő?</em></h2></div><p data-reveal>Válaszd ki, mivel indulnál – megmutatjuk, mit kapsz a képzésben.</p></div>
  <div className="garage" role="tablist" aria-label="Képzés típusa" data-reveal>
   {['B','A'].map(id=>{const k=courses[id],on=course===id;return <div key={id} className={'bay bay-'+id+(on?' on':'')}>
    <button role="tab" id={'tab-'+id} aria-selected={on} aria-controls={'panel-'+id} className="bay-hit" onClick={e=>{const el=e.currentTarget,y=el.getBoundingClientRect().top;flushSync(()=>setCourse(id));scrollBy({top:el.getBoundingClientRect().top-y,behavior:'instant'})}}>
     <span className="bay-letter">{id}</span><span className="bay-name">{k.name}<small>{k.kind}</small></span><span className="bay-pick" aria-hidden="true">{on?'Kiválasztva':'Ezt választom'}</span>
    </button>
    <div className="bay-stage"><Vehicle type={id}/></div>
    <div className="bay-detail" role="tabpanel" id={'panel-'+id} aria-labelledby={'tab-'+id} inert={!on}>
     <h3>{k.title}</h3><p>{k.text}</p>
     <ul>{k.items.map((t,i)=><li key={t} style={{'--d':.35+i*.07+'s'}}>{t}</li>)}</ul>
     <div className="course-actions"><a className="button red magnetic" href="/kapcsolat#jelentkezes">Érdekel a képzés <Arrow/></a><Link className="text-link light" href={'/'+id.toLowerCase()+'-kategorias-tanfolyamok-koltsegei'}>Díjak <Arrow/></Link></div>
    </div>
   </div>})}
  </div>
  <p className="aside-note" data-reveal>Bármikor elérhető online elsősegély-tanfolyam! Tantermi képzésről érdeklődj elérhetőségeinken!</p>
 </section>

 <section className="gearbox" id="utvonal" ref={box} aria-label="Út a jogosítványig, hat lépésben">
  <div className="gearbox-pin">
   <span className="gear-ghost" aria-hidden="true" key={gear}>{gear}</span>
   <div className="gearbox-head"><span className="eyebrow light">03 — Út a jogsiig</span><p>Hat sebesség. Hat lépés. <em>Görgess, és kapcsolj.</em></p></div>
   <div className="gate-wrap"><div className="gate-box">
    <svg className="gate" viewBox="-160 -160 320 320" aria-hidden="true">
     <defs>
      <radialGradient id="plate" cx="35%" cy="25%"><stop offset="0" stopColor="#3a4379"/><stop offset=".6" stopColor="#1a2150"/><stop offset="1" stopColor="#0d1234"/></radialGradient>
      <radialGradient id="ball" cx="38%" cy="32%"><stop offset="0" stopColor="#ff8a78"/><stop offset=".45" stopColor="#e3352b"/><stop offset="1" stopColor="#7a1510"/></radialGradient>
     </defs>
     <rect x="-150" y="-150" width="300" height="300" rx="52" fill="url(#plate)" className="plate"/>
     {[-124,124].map(v=>[-124,124].map(w=><circle key={v+'_'+w} cx={v} cy={w} r="5" className="screw"/>))}
     <path className="slot" d="M-80 -80V80M0 -80V80M80 -80V80M-80 0H80"/>
     <path className="slot-in" d="M-80 -80V80M0 -80V80M80 -80V80M-80 0H80"/>
     {[1,2,3,4,5,6].map(n=>{const[x,y]=gearPos(n);return <text key={n} x={x*80} y={y>0?143:-121} className={n===gear?'on':''}>{n}</text>})}
    </svg>
    <div className="knob"><div className={'knob-body clunk-'+(gear%2)}><svg viewBox="-34 -34 68 68" aria-hidden="true"><circle r="34" fill="url(#ball)"/><circle r="24" className="knob-cap"/><path className="knob-h" d="M-12 -10V10M0 -10V10M12 -10V10M-12 0H12"/></svg></div></div>
   </div></div>
   <div className="gear-panel">
    <div className="tacho" aria-hidden="true">
     <svg viewBox="-100 -100 200 170">
      <path className="tacho-arc" d="M-69.3 40A80 80 0 1 1 69.3 40"/><path className="tacho-red" d="M77.3 -20.7A80 80 0 0 1 69.3 40"/>
      {[0,1,2,3,4,5,6,7,8].map(i=>{const a=(-210+240*i/8)*Math.PI/180;return <g key={i}><line x1={Math.cos(a)*70} y1={Math.sin(a)*70} x2={Math.cos(a)*80} y2={Math.sin(a)*80}/><text x={Math.cos(a)*56} y={Math.sin(a)*56+4}>{i}</text></g>})}
      <line className="needle" x1="0" y1="8" x2="0" y2="-72"/><circle r="6" className="needle-hub"/>
     </svg>
     <div className="tacho-read"><b className="kmh-val">0</b><small>km/h</small><span><i className="rpm-val">1.8</i>×1000 rpm</span></div>
    </div>
    <div className="gear-steps">{gears.map(([k,t,p],i)=><article key={k} className={gear===i+1?'on':''} aria-current={gear===i+1?'step':undefined}><span className="gear-kicker">{i+1}. sebesség · {k}</span><h3>{t}</h3><p>{p}</p></article>)}</div>
    <div className="gear-dots">{gears.map(([k],i)=><button key={k} className={gear===i+1?'on':''} onClick={()=>goGear(i+1)} aria-label={`${i+1}. lépés: ${k}`}>{i+1}</button>)}<i style={{transform:`scaleX(var(--t,0))`}}/></div>
   </div>
  </div>
 </section>

 <section className="section instructors" id="oktatok">
  <div className="section-top"><div><span className="eyebrow" data-reveal>04 — Jó kezekben vagy</span><h2 data-reveal>Valaki, aki mellett<br/><em>jó</em> vezetni tanulni.</h2></div><Link className="text-link" href="/oktatoink" data-reveal>Mind a 24 oktatónk <Arrow/></Link></div>
  <div className="people">{[['anett','Dobos Anett','Volkswagen Golf · dízel'],['tiborne','Baranya Tiborné','Toyota Yaris · Honda Jazz automata'],['janos','Bercsényi János','Mazda 5 · dízel']].map(([img,n,car],i)=><article key={img} data-reveal style={{'--d':i*110+'ms'}}><div className="portrait"><img src={'/assets/'+img+'.jpg'} alt={n+' oktató'} loading="lazy"/><span className="portrait-tag">{car}</span></div><h3>{n}</h3><p>{car}</p></article>)}</div>
 </section>


 <section className="section faq" id="kerdesek">
  <div><span className="eyebrow" data-reveal>05 — Tisztázzuk az elején</span><h2 data-reveal>Van még<br/>egy <em>kérdésed?</em></h2><p data-reveal>Teljesen természetes. Az első lépésnél is melletted vagyunk.</p></div>
  <div data-reveal>{faqs.map(([q,a])=><details key={q}><summary>{q}<span aria-hidden="true"/></summary><p>{a}</p></details>)}</div>
 </section>

 <section className="contact" id="kapcsolat">
  <div className="contact-glow" aria-hidden="true"/>
  <div className="contact-inner">
   <div><span className="eyebrow light" data-reveal>Hatodik sebesség</span><h2 data-reveal>Na, merre<br/><em>induljunk?</em></h2><p data-reveal>Mesélj a terveidről. Mi segítünk megtenni az első lépést.</p><div className="contact-actions" data-reveal><a className="button red magnetic" href="mailto:hatodiksebessegsuli@gmail.com">Írok az autósiskolának <Arrow/></a><a className="button outline magnetic" href="tel:+36703258258">Hívom most <Arrow/></a></div></div>
   <div className="contact-details" data-reveal>
    <span>Halljuk egymást</span><a className="phone" href="tel:+36703258258">+36 70 325 8258</a><a href="mailto:hatodiksebessegsuli@gmail.com">hatodiksebessegsuli@gmail.com</a>
    <span>Találkozzunk személyesen</span><p>5000 Szolnok, Batthyány út 16/A.<br/>A Pláza mellett.</p>
    <a className="text-link light" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=Hatodik+Sebess%C3%A9g+Aut%C3%B3siskola+Szolnok">Útvonaltervezés <Arrow/></a>
    <small>Személyes látogatás előtt egyeztess velünk telefonon.</small>
   </div>
  </div>
 </section>


 </>;
}
