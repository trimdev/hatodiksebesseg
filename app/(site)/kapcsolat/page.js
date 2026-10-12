import Link from 'next/link';
import {PageHero,Arrow} from '../chrome';
import {OpenStatus,ApplyForm} from '../widgets';
import {contact,visitNote,leader} from '../../../content/school';

export const metadata={title:'Kapcsolat • Hatodik Sebesség Autósiskola',description:'Iroda: 5000 Szolnok, Batthyány út 16/A., a Pláza mellett. Telefon: +36 70 325 8258. Nyitvatartás és online jelentkezés.'};

export default function Page(){
 return <>
  <PageHero gear={5} eyebrow="Kapcsolat" title={<>Na, merre <em>induljunk?</em></>} lead="Vegye fel velünk a kapcsolatot, ha információra van szüksége autósiskolánkkal vagy képzéseinkkel kapcsolatban."/>
  <section className="section contact-grid">
   <div data-reveal><OpenStatus/></div>
   <div className="contact-card" data-reveal style={{'--d':'100ms'}}>
    <span className="eyebrow">Hatodik Sebesség Autósiskola Kft.</span>
    <a className="phone" href={'tel:'+contact.tel}>{contact.phone}</a>
    <a className="mail" href={'mailto:'+contact.email}>{contact.email}</a>
    <dl>
     <div><dt>Iroda</dt><dd>{contact.office}<br/><small>{contact.officeNote}</small></dd></div>
     <div><dt>Tanterem</dt><dd>{contact.classroom}</dd></div>
     <div><dt>Iskolavezető</dt><dd>{leader}, iskolavezető és ügyvezető</dd></div>
    </dl>
    <a className="text-link" href={contact.maps} target="_blank" rel="noreferrer">Útvonaltervezés <Arrow/></a>
    <p className="fine">{visitNote}</p>
   </div>
  </section>
  <section className="section apply-section" id="jelentkezes">
   <div><span className="eyebrow" data-reveal>Jelentkezés, érdeklődés</span><h2 data-reveal>Töltsd ki,<br/><em>és felvesszük</em> veled a kapcsolatot.</h2><p data-reveal>A jelentkezéshez szükséges az orvosi alkalmassági igazolás. Kérdésed van? Írj nyugodtan.</p><div className="doc-links" data-reveal><Link className="text-link" href="/adatkezelesi-tajekoztato">Adatkezelési tájékoztató <Arrow/></Link><Link className="text-link" href="/irasos-tajekoztato">Írásos tájékoztató <Arrow/></Link></div></div>
   <div data-reveal><ApplyForm/></div>
  </section>
 </>;
}
