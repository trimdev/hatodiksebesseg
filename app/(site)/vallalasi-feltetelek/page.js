import Link from 'next/link';
import {PageHero,Arrow} from '../chrome';
import {company,leader} from '../../../content/school';

export const metadata={title:'Vállalási feltételek • Hatodik Sebesség Autósiskola',description:'Vállalási feltételek AM, A1, A1+B, A és B kategóriás képzésre jelentkezők részére.'};

const rows=company.filter(([k])=>k!=='Cégtulajdonos'&&k!=='Számlaszám');

export default function Page(){
 return <>
  <PageHero eyebrow="Iskola" title={<>Vállalási <em>feltételek.</em></>} lead="Készült a 24/2005. (IV. 21.) GKM rendelet alapján, a közúti járművezető „AM, A1, A1+B, A, B” kategóriás képzésre jelentkezők részére."/>
  <section className="section doc">
   <dl className="data-table" data-reveal>{rows.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
   <div className="doc-links" data-reveal><Link className="text-link" href="/b-kategorias-tanfolyamok-koltsegei">„B” kategóriás képzés költségei <Arrow/></Link><Link className="text-link" href="/a-kategorias-tanfolyamok-koltsegei">Motoros oktatás költségei <Arrow/></Link></div>
   <p className="sign-line" data-reveal>{leader}, iskolavezető és ügyvezető</p>
  </section>
 </>;
}
