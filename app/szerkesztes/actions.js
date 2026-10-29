'use server';
import {cookies} from 'next/headers';
import {redirect} from 'next/navigation';
import {revalidatePath} from 'next/cache';
import {randomUUID} from 'node:crypto';
import {readNews,writeNews,tags,sessionFor,validSession} from '../news-store';

// Cookie lives on / so the homepage can switch its news rail into edit mode.
const COOKIE='hs_admin',HERE='/szerkesztes';

export async function login(formData){
 const pw=process.env.ADMIN_PASSWORD,given=String(formData.get('password')||'');
 if(!pw||sessionFor(given)!==sessionFor(pw)){await new Promise(r=>setTimeout(r,1000));redirect(HERE+'?hiba=1')}
 (await cookies()).set(COOKIE,sessionFor(pw),{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/',maxAge:60*60*24*30});
 // readable hint so visitors' pages skip the isAdmin() round-trip; grants nothing by itself
 (await cookies()).set('hs_edit','1',{sameSite:'strict',path:'/',maxAge:60*60*24*30});
 redirect('/#hirek');
}
export async function logout(){const c=await cookies();c.delete({name:COOKIE,path:'/'});c.delete({name:'hs_edit',path:'/'});redirect('/')}
export async function isAdmin(){return validSession((await cookies()).get(COOKIE)?.value)}

async function guard(){if(!await isAdmin())throw new Error('Unauthorized')}
async function commit(data){await writeNews(data);revalidatePath('/')}

export async function saveItem(formData){
 await guard();
 const f=k=>String(formData.get(k)||'').trim();
 const item={id:f('id')||randomUUID(),date:f('date'),tag:f('tag'),title:f('title'),text:f('text')};
 if(!/^\d{4}-\d{2}-\d{2}$/.test(item.date)||!tags.includes(item.tag)||!item.title||!item.text)return {error:'Hiányzó vagy hibás mező.'};
 if(formData.get('urgent'))item.urgent=true;
 if(formData.get('sample'))item.sample=true;
 const data=await readNews();
 // Only one urgent notice is shown, so a new urgent one replaces the old.
 if(item.urgent)data.news.forEach(n=>delete n.urgent);
 const i=data.news.findIndex(n=>n.id===item.id);
 if(i<0)data.news.push(item);else data.news[i]=item;
 await commit(data);
}
export async function deleteItem(formData){
 await guard();
 const data=await readNews();data.news=data.news.filter(n=>n.id!==formData.get('id'));
 await commit(data);
}
export async function saveOffice(formData){
 await guard();
 const data=await readNews();
 data.office=String(formData.get('office')||'').split('\n').map(l=>l.split('|').map(s=>s.trim())).filter(([k,v])=>k&&v);
 await commit(data);
}
