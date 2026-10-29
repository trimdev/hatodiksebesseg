import {PageHero,Arrow} from '../chrome';
import {contact} from '../../../content/school';

export const metadata={title:'Online jelentkezés • Hatodik Sebesség Autósiskola',description:'Az online jelentkezés hamarosan indul. Addig érdeklődjön telefonon: +36 70 325 8258.'};

export default function Page(){
 return <>
  <PageHero eyebrow="Online jelentkezés" title={<><em>Hamarosan!</em></>} lead="Érdeklődjön telefonon az indulásig!">
   <div className="hero-actions rise" style={{'--d':'.55s'}}><a className="button red magnetic" href={'tel:'+contact.tel}>Hívjon minket: {contact.phone} <Arrow/></a></div>
  </PageHero>
 </>;
}
