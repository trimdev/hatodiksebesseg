import Link from 'next/link';
import {PageHero,Arrow} from '../chrome';
import {Instructors} from '../widgets';
import {instructors} from '../../../content/school';

export const metadata={title:'Oktatóink • Hatodik Sebesség Autósiskola',description:'Ismerd meg a Hatodik Sebesség oktatóit és oktatóautóit – automata váltós és idegen nyelvű oktatás is.'};

export default function Page(){
 const auto=instructors.filter(i=>i.auto).length;
 return <>
  <PageHero gear={4} eyebrow="Oktatóink" title={<>Jó kezekben <em>vagy.</em></>} lead="Precíz oktatók, több éves tapasztalattal. Válaszd ki, kivel és milyen autóval tanulnál.">
   <div className="hero-stats rise" style={{'--d':'.55s'}}><div><b>{instructors.length}</b><span>oktató</span></div><div><b>{auto}</b><span>automata váltóval is</span></div><div><b>3</b><span>idegen nyelv</span></div></div>
  </PageHero>
  <section className="section crew-section"><Instructors/></section>
  <section className="section sign"><p data-reveal>Nem tudod, kit válassz? Segítünk megtalálni a hozzád illő oktatót.</p><Link className="button red magnetic" href="/kapcsolat#jelentkezes" data-reveal>Kérdezz minket <Arrow/></Link></section>
 </>;
}
