import {readNews,tags} from '../news-store';
import {isAdmin,login,logout,saveItem,deleteItem,saveOffice} from './actions';

export const metadata={title:'Szerkesztés • Hatodik Sebesség',robots:{index:false,follow:false}};

function ItemForm({n={}}){
 return <form action={saveItem} className="admin-card">
  {n.id&&<input type="hidden" name="id" value={n.id}/>}
  <div className="admin-row">
   <label>Dátum<input type="date" name="date" defaultValue={n.date||new Date().toISOString().slice(0,10)} required/></label>
   <label>Címke<select name="tag" defaultValue={n.tag||'Hír'}>{tags.map(t=><option key={t}>{t}</option>)}</select></label>
  </div>
  <label>Cím<input name="title" defaultValue={n.title} required/></label>
  <label>Szöveg<textarea name="text" rows={3} defaultValue={n.text} required/></label>
  <div className="admin-row">
   <label className="check"><input type="checkbox" name="urgent" defaultChecked={n.urgent}/>Kiemelt (felugró értesítés)</label>
   <label className="check"><input type="checkbox" name="sample" defaultChecked={n.sample}/>Minta</label>
  </div>
  <div className="admin-row">
   <button>{n.id?'Mentés':'Hír hozzáadása'}</button>
   {n.id&&<button formAction={deleteItem} className="danger">Törlés</button>}
  </div>
 </form>;
}

export default async function Admin({searchParams}){
 if(!await isAdmin())return <main className="admin">
  <form action={login} className="admin-card admin-login">
   <h1>Belépés</h1>
   {(await searchParams).hiba&&<p className="admin-error" role="alert">Hibás jelszó.</p>}
   <label>Jelszó<input type="password" name="password" autoComplete="current-password" required autoFocus/></label>
   <button>Belépés</button>
  </form>
 </main>;
 const {news,office}=await readNews();
 return <main className="admin">
  <div className="admin-head"><h1>Hírek szerkesztése</h1><a href="/">Megtekintés ↗</a><form action={logout}><button className="ghost">Kilépés</button></form></div>
  <h2>Új hír</h2>
  <ItemForm/>
  <h2>Ügyfélfogadás kártya</h2>
  <form action={saveOffice} className="admin-card">
   <label>Soronként: <code>Címke | Érték</code><textarea name="office" rows={4} defaultValue={office.map(r=>r.join(' | ')).join('\n')}/></label>
   <button>Mentés</button>
  </form>
  <h2>Meglévő hírek ({news.length})</h2>
  {[...news].sort((a,b)=>b.date.localeCompare(a.date)).map(n=><ItemForm key={n.id} n={n}/>)}
 </main>;
}
