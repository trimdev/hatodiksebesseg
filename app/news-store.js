import fs from 'node:fs/promises';
import path from 'node:path';
import {createHmac,timingSafeEqual} from 'node:crypto';

// ponytail: JSON file on disk — needs a server with a writable filesystem (`next start`), not serverless; move to a DB if hosted on Vercel.
const file=path.join(process.cwd(),'content/news.json');
export const tags=['Fontos','Nyitvatartás','Vizsga','Tanfolyam','Hír'];
export const readNews=async()=>JSON.parse(await fs.readFile(file,'utf8'));
export async function writeNews(data){const tmp=file+'.tmp';await fs.writeFile(tmp,JSON.stringify(data,null,1)+'\n');await fs.rename(tmp,file)}

// Session cookie = HMAC of the password: changing ADMIN_PASSWORD logs everyone out.
const sign=pw=>createHmac('sha256',pw).update('hatodik-admin').digest('hex');
export const sessionFor=pw=>sign(pw);
export function validSession(value){const pw=process.env.ADMIN_PASSWORD;if(!pw||!value)return false;const a=Buffer.from(value),b=Buffer.from(sign(pw));return a.length===b.length&&timingSafeEqual(a,b)}
