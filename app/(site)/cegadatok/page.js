import Link from 'next/link';
import {PageHero,Arrow} from '../chrome';
import {company,leader} from '../../../content/school';

export const metadata={title:'Cégadatok • Hatodik Sebesség Autósiskola',description:'A Hatodik Sebesség Autósiskola Kft. cég- és képzési adatai.'};

function CompanyTable({rows}){
 return <dl className="data-table" data-reveal>{rows.map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>;
}

export default function Page(){
 return <>
  <PageHero eyebrow="Iskola" title={<>Cég<em>adatok.</em></>}/>
  <section className="section doc"><CompanyTable rows={company}/><p className="sign-line" data-reveal>{leader}, iskolavezető és ügyvezető</p><Link className="text-link" href="/vallalasi-feltetelek">Vállalási feltételek <Arrow/></Link></section>
 </>;
}
