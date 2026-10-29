'use client';
import {useState,useEffect} from 'react';
import {Arrow} from './chrome';
import {newsTags as tags} from '../../content/school';
import {isAdmin,logout,saveItem,deleteItem,saveOffice} from '../szerkesztes/actions';

const months=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'];
const fmt=d=>{const[y,m,day]=d.split('-');return{day:+day,month:months[m-1],full:`${y}. ${months[m-1]} ${+day}.`}};
const today=()=>new Date().toISOString().slice(0,10);

// Visitors get the static rail; a logged-in admin (cookie set at /szerkesztes) edits the same cards in place.
export function News({news,office}){
 const feed=[...news].sort((a,b)=>b.date.localeCompare(a.date));
 const[admin,setAdmin]=useState(false);const[edit,setEdit]=useState(null);const[busy,setBusy]=useState(false);const[err,setErr]=useState('');
 useEffect(()=>{if(document.cookie.includes('hs_edit=1'))isAdmin().then(setAdmin,()=>{})},[]);
 const run=action=>async fd=>{setBusy(true);setErr('');try{const r=await action(fd);if(r?.error)setErr(r.error);else setEdit(null)}catch{setErr('Nem sikerült menteni. Próbáld újra.')}setBusy(false)};
 const open=id=>{setErr('');setEdit(id)};
 const actions=<div className="edit-actions">
  <button disabled={busy}>{busy?'Mentés…':'Mentés'}</button>
  <button type="button" className="ghost" onClick={()=>setEdit(null)}>Mégse</button>
 </div>;

 const card=n=>{
  if(admin&&edit===(n.id||'new'))return <form key={n.id||'new'} className={'news-card editing'+(n.urgent?' urgent':'')} action={run(saveItem)}>
   {n.id&&<input type="hidden" name="id" value={n.id}/>}
   <div className="news-meta"><input type="date" name="date" defaultValue={n.date||today()} required aria-label="Dátum"/><select name="tag" defaultValue={n.tag||'Hír'} aria-label="Címke">{tags.map(t=><option key={t}>{t}</option>)}</select></div>
   <input className="edit-title" name="title" defaultValue={n.title} placeholder="Cím" required aria-label="Cím" autoFocus/>
   <textarea className="edit-text" name="text" defaultValue={n.text} placeholder="Szöveg" rows={5} required aria-label="Szöveg"/>
   <label className="edit-check"><input type="checkbox" name="urgent" defaultChecked={n.urgent}/>Kiemelt – a főoldal tetején is megjelenik</label>
   <label className="edit-check"><input type="checkbox" name="sample" defaultChecked={n.sample}/>Minta</label>
   {err&&<p className="edit-error" role="alert">{err}</p>}
   {actions}
   {n.id&&<button formAction={run(deleteItem)} formNoValidate className="edit-delete" disabled={busy}>Hír törlése</button>}
  </form>;
  const d=fmt(n.date);
  return <article key={n.id} className={'news-card'+(n.urgent?' urgent':'')}>
   <div className="news-meta"><time dateTime={n.date}><b>{d.day}</b>{d.month}</time><span className={'tag tag-'+n.tag.toLowerCase()}>{n.tag}</span>{n.sample&&<span className="tag tag-minta">Minta</span>}</div>
   <h3>{n.title}</h3><p>{n.text}</p><small>{d.full}</small>
   {admin&&<button className="edit-pen" onClick={()=>open(n.id)} aria-label={'Szerkesztés: '+n.title}>✎ Szerkesztés</button>}
  </article>;
 };

 return <>
  {admin&&<div className="edit-bar" role="status"><i className="pulse"/>Szerkesztő mód – a hírek itt, élőben szerkeszthetők.<form action={logout}><button>Kilépés</button></form></div>}
  <div className="news-rail" data-reveal>
   {admin&&edit==='office'?<form className="office editing" action={run(saveOffice)}>
    <span className="office-live">Iroda</span><h3>Ügyfélfogadás</h3>
    <textarea className="edit-text" name="office" rows={7} defaultValue={office.map(r=>r.join(' | ')).join('\n')} aria-label="Soronként: Címke | Érték"/>
    <small>Soronként: Címke | Érték</small>
    {err&&<p className="edit-error" role="alert">{err}</p>}
    {actions}
   </form>
   :<article className="office"><span className="office-live">Iroda</span><h3>Ügyfélfogadás</h3><dl>{office.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl><a className="text-link light" href="tel:+36703258258">Hívj minket <Arrow/></a>
    {admin&&<button className="edit-pen" onClick={()=>open('office')}>✎ Szerkesztés</button>}
   </article>}
   {admin&&(edit==='new'?card({}):<button className="news-add" onClick={()=>open('new')}><b>+</b>Új hír</button>)}
   {feed.map(card)}
  </div>
 </>;
}
