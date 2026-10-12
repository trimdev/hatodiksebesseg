import Link from 'next/link';
import {PageHero,Arrow} from '../chrome';

export const metadata={title:'Írásos tájékoztató • Hatodik Sebesség Autósiskola'};

export default function Page(){
 return <>
  <PageHero eyebrow="Tájékoztatók" title={<>Írásos <em>tájékoztató.</em></>} lead="Frissítés alatt, köszönjük türelmüket!"/>
  <section className="section doc"><p className="fine" data-reveal>Addig is kérdéseiddel keress minket bizalommal.</p><Link className="text-link" href="/kapcsolat" data-reveal>Kapcsolat <Arrow/></Link></section>
 </>;
}
