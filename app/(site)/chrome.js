'use client';
import {useState,useEffect} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {contact} from '../../content/school';

export const Arrow=()=><span className="arr" aria-hidden="true">↗</span>;
const nav=[['Aktuális','/#hirek'],['Tanfolyamok','/tanfolyamaink'],['Díjak','/b-kategorias-tanfolyamok-koltsegei'],['Oktatóink','/oktatoink'],['Kapcsolat','/kapcsolat']];
const active=(href,path)=>href!=='/#hirek'&&(path===href||href.includes('kategorias')&&path.includes('kategorias'));

export function Header(){
 const path=usePathname();
 const[menu,setMenu]=useState(false);const[scrolled,setScrolled]=useState(false);

 useEffect(()=>{
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  const watch=()=>document.querySelectorAll('[data-reveal]:not(.in)').forEach(el=>io.observe(el));
  // client widgets (filters, tabs) render new [data-reveal] nodes after mount
  const mo=new MutationObserver(watch);mo.observe(document.body,{childList:true,subtree:true});watch();
  const onScroll=()=>setScrolled(scrollY>40);onScroll();addEventListener('scroll',onScroll,{passive:true});
  const mags=reduce||matchMedia('(pointer: coarse)').matches?[]:[...document.querySelectorAll('.magnetic')];
  const move=e=>{const b=e.currentTarget,r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.3}px)`};
  const leave=e=>{e.currentTarget.style.transform=''};
  mags.forEach(b=>{b.addEventListener('pointermove',move);b.addEventListener('pointerleave',leave)});
  setMenu(false);
  return()=>{io.disconnect();mo.disconnect();removeEventListener('scroll',onScroll);mags.forEach(b=>{b.removeEventListener('pointermove',move);b.removeEventListener('pointerleave',leave)})};
 },[path]);

 useEffect(()=>{if(!menu)return;
  const close=e=>{if(e.type==='keydown'?e.key==='Escape':e.type==='resize'?innerWidth>1280:!e.target.closest('header'))setMenu(false)};
  addEventListener('keydown',close);addEventListener('pointerdown',close);addEventListener('resize',close);
  return()=>{removeEventListener('keydown',close);removeEventListener('pointerdown',close);removeEventListener('resize',close)};
 },[menu]);

 return <header className={scrolled?'scrolled':''}>
  <Link className="brand" href="/" aria-label="Hatodik Sebesség – kezdőlap"><img className="brand-mark" src="/assets/original-logo.png" alt=""/><span className="brand-name">HATODIK SEBESSÉG<small>AUTÓSISKOLA · SZOLNOK</small></span></Link>
  <nav className={menu?'open':''} aria-label="Fő navigáció">{nav.map(([n,h])=><Link key={h} href={h} aria-current={active(h,path)?'page':undefined} onClick={()=>setMenu(false)}>{n}</Link>)}<Link className="nav-hot" href="/online-jelentkezes" onClick={()=>setMenu(false)}>Online jelentkezés</Link><Link className="nav-cta" href="/kapcsolat#jelentkezes" onClick={()=>setMenu(false)}>Jelentkezem</Link></nav>
  <a className="button small magnetic" href={'tel:'+contact.tel}>{contact.phone}</a>
  <button className="menu" aria-label="Menü" aria-expanded={menu} onClick={()=>setMenu(!menu)}><span/><span/><span/></button>
 </header>;
}

const cols=[
 ['Képzések',[['Tanfolyamaink','/tanfolyamaink'],['„B” kategória díjai','/b-kategorias-tanfolyamok-koltsegei'],['„A” kategóriák díjai','/a-kategorias-tanfolyamok-koltsegei']]],
 ['Iskola',[['Oktatóink','/oktatoink'],['Kapcsolat','/kapcsolat'],['Cégadatok','/cegadatok'],['Vállalási feltételek','/vallalasi-feltetelek']]],
 ['Tájékoztatók',[['Adatkezelési tájékoztató','/adatkezelesi-tajekoztato'],['Adatközlés','/adatkozles'],['Impresszum','/impresszum'],['Írásos tájékoztató','/irasos-tajekoztato']]],
];
export function Footer(){
 return <footer className="site-footer">
  <div className="foot-top">
   <div className="foot-brand"><img className="original-logo" src="/assets/original-logo.png" alt="A Hatodik Sebesség autós emblémája"/><p>Kapcsold a hatodik sebességet!<br/><em>Tanulj nálunk vezetni.</em></p><a className="phone" href={'tel:'+contact.tel}>{contact.phone}</a><a href={'mailto:'+contact.email}>{contact.email}</a></div>
   {cols.map(([h,ls])=><div key={h} className="foot-col"><span>{h}</span>{ls.map(([n,href])=><Link key={href} href={href}>{n}</Link>)}</div>)}
  </div>
  <div className="foot-bottom"><span>© {new Date().getFullYear()} Hatodik Sebesség Autósiskola Kft.</span><span>Képzési engedély: KGHF/41568-1/2019-ITM · Felnőttképzési nyilvántartási szám: B/2020/003628</span><a className="credit" href="https://boostwithdata.hu" target="_blank" rel="noopener"><i>6</i> A weboldalt hatodikba kapcsolta: <b>Boostwithdata Kft.</b> ↗</a></div>
 </footer>;
}

// H-pattern position of gear n: column -1..1, row -1 top / 1 bottom
const pos=n=>[(Math.floor((n-1)/2)-1)*26,n%2?-21:21];
// small gate whose knob slots from neutral into this page's gear on load
export function MiniShifter({gear}){
 const[x,y]=pos(gear);
 return <svg className="mini-shifter" viewBox="-50 -50 100 100" aria-hidden="true" style={{'--x':x+'px','--y':y+'px'}}>
  <rect x="-48" y="-48" width="96" height="96" rx="20" className="ms-plate"/>
  <path className="ms-slot" d="M-26 -21V21M0 -21V21M26 -21V21M-26 0H26"/>
  {[1,2,3,4,5,6].map(n=>{const[a,b]=pos(n);return <text key={n} x={a} y={b<0?-34:41} className={n===gear?'on':''}>{n}</text>})}
  <circle r="9" className="ms-knob"/>
 </svg>;
}

export function PageHero({eyebrow,title,lead,gear,children}){
 return <section className="page-hero">
  <div className="hero-road" aria-hidden="true"><div className="road-plane"><div className="road-dashes"/></div></div>
  <div className="page-hero-inner">
   <div>
    <span className="eyebrow light rise" style={{'--d':'.05s'}}><i className="pulse"/>{eyebrow}</span>
    <h1><span className="line"><span style={{'--d':'.15s'}}>{title}</span></span></h1>
    {lead&&<p className="rise" style={{'--d':'.4s'}}>{lead}</p>}
    {children}
   </div>
   {gear&&<div className="rise" style={{'--d':'.3s'}}><MiniShifter gear={gear}/></div>}
  </div>
 </section>;
}

export function CatSwitch({on}){
 return <div role="navigation" className="cat-switch rise" style={{'--d':'.5s'}} aria-label="Kategória">{[['B','Személyautó','/b-kategorias-tanfolyamok-koltsegei'],['A','Motor','/a-kategorias-tanfolyamok-koltsegei']].map(([c,n,h])=><Link key={c} href={h} aria-current={on===c?'page':undefined}><b>{c}</b>{n}</Link>)}</div>;
}

