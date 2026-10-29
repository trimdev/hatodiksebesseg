import {redirect,notFound} from 'next/navigation';
import {isAdmin,login} from './actions';

export const metadata={title:'Szerkesztés • Hatodik Sebesség',robots:{index:false,follow:false}};

// Login only: once signed in, the news is edited in place on the homepage.
export default async function Admin({searchParams}){
 // No ADMIN_PASSWORD (e.g. on Vercel, whose disk is read-only) = editing is off; news changes go through the repo.
 if(!process.env.ADMIN_PASSWORD)notFound();
 if(await isAdmin())redirect('/#hirek');
 return <main className="admin">
  <form action={login} className="admin-card admin-login">
   <h1>Belépés</h1>
   {(await searchParams).hiba&&<p className="admin-error" role="alert">Hibás jelszó.</p>}
   <label>Jelszó<input type="password" name="password" autoComplete="current-password" required autoFocus/></label>
   <button>Belépés</button>
  </form>
 </main>;
}
