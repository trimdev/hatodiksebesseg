import {PageHero,Arrow} from '../chrome';

export const metadata={title:'Impresszum • Hatodik Sebesség Autósiskola',description:'A Hatodik Sebesség Autósiskola Kft. impresszuma.'};

export default function Page(){
 return <>
  <PageHero eyebrow="Tájékoztatók" title={<>Impresszum<em>.</em></>}/>
  <section className="section doc">
   <a className="button small magnetic pdf-btn" href="/docs/impresszum.pdf" target="_blank">PDF megnyitása <Arrow/></a>
   <object className="pdf-frame" data="/docs/impresszum.pdf" type="application/pdf" aria-label="Impresszum (PDF)"><p>A PDF itt nem jeleníthető meg. <a href="/docs/impresszum.pdf">Nyisd meg külön.</a></p></object>
  </section>
 </>;
}
