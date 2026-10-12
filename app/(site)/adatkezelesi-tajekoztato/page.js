import {PageHero,Arrow} from '../chrome';

export const metadata={title:'Adatkezelési tájékoztató • Hatodik Sebesség Autósiskola',description:'A Hatodik Sebesség Autósiskola Kft. adatkezelési tájékoztatója.'};

const L=({items})=><ul>{items.map(x=><li key={x}>{x}</li>)}</ul>;

export default function Page(){
 return <>
  <PageHero eyebrow="Tájékoztatók" title={<>Adatkezelési <em>tájékoztató.</em></>} lead="Hatályos 2019. május 2-től."/>
  <section className="section doc prose">
   <a className="button small magnetic pdf-btn" href="/docs/adatkezelesi-tajekoztato.pdf" target="_blank">PDF letöltése <Arrow/></a>
   <dl className="data-table">
    <div><dt>Adatkezelő</dt><dd>Hatodik Sebesség Autósiskola Kft., Szokola-Tóth Melinda ügyvezető, iskolavezető</dd></div>
    <div><dt>Adatkezelő székhelye</dt><dd>5000 Szolnok, Mátyás király út 9. 2/6.</dd></div>
    <div><dt>Adatkezelő postacíme</dt><dd>5000 Szolnok, Mátyás király út 9. 2/6.</dd></div>
    <div><dt>Telefonszám</dt><dd>+36 70 325 8258</dd></div>
    <div><dt>E-mail</dt><dd>hatodiksebessegsuli@gmail.com</dd></div>
    <div><dt>Adatkezelő honlapja</dt><dd>www.hatodik-sebesseg.hu</dd></div>
   </dl>

   <h2>Az adatkezelés alapjául szolgáló jogszabályok</h2>
   <L items={['az Európai Parlament és a Tanács 2016/679. rendelete (2016. április 27.) a természetes személyeknek a személyes adatok kezelése tekintetében történő védelméről és az ilyen adatok szabad áramlásáról, valamint a 95/46/EK rendelet hatályon kívül helyezéséről','az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény','az elektronikus hírközlésről szóló 2003. évi C. törvény','a közúti járművezetők és a közúti közlekedési szakemberek képzésének és vizsgáztatásának részletes szabályairól szóló 24/2005. (IV. 21.) GKM rendelet','a számvitelről szóló 2000. évi C. törvény']}/>

   <h2>A szerződés megkötése során kezelt adatok</h2>
   <p>Név, születési név, anyja neve, születési hely és idő, állampolgárság, lakcím, értesítési cím, telefonszám, email cím, személyazonosító okmány száma, járművezetői igazolvány adatai, vezető engedély adatai, egészségügyi alkalmasság adatai, járművezetéstől eltiltás adatai, tanfolyammentes vizsgára kötelezés adatai, kényszergyógyítás vagy kényszergyógykezelés ténye, rendkívüli pályaalkalmassági vizsgálatának adatai.</p>
   <p>Az adatkezelés célja: a közúti járművezetői vizsgához a vizsgázó személy 24/2005. (IV.21.) GKM rendelet szerint előírt adatainak Vizsgaközpont általi regisztrálása.</p>

   <h2>Az adatkezelés jogalapja</h2>
   <p>Az adatkezelés olyan szerződés teljesítéséhez szükséges, amelyben Ön az egyik fél, illetve az a szerződés megkötését megelőzően az Ön kérésére történő lépések megtételéhez szükséges.</p>
   <p>Az Adatkezelő tájékoztatja Önt arról, hogy a személyes adat szolgáltatása szerződéses kötelezettségen alapul és a szerződés kötésének előfeltétele. Amennyiben Ön személyes adatainak kezeléséhez nem járul hozzá, illetve nem teljesíti az adatszolgáltatást, úgy a szerződés nem jön létre.</p>

   <h2>Az adatkezelés időtartama</h2>
   <p>Az Adatkezelő a személyes adatait a szerződésből fakadó követelések érvényesíthetőségének elévüléséig, valamint a kapcsolódó jogszabályok által előírt időtartamig, de legalább a számvitelről szóló 2000. évi C. törvény számviteli bizonylatok megőrzési kötelezettségére vonatkozó rendelkezések szerinti időtartamig, azaz 8 évig kezeli.</p>

   <h2>Az adatokhoz való hozzáférés és az adatbiztonsági intézkedések</h2>
   <h3>Az adatokhoz való hozzáférés és az adattovábbítás</h3>
   <p>Az Ön által megadott személyes adatokhoz az Adatkezelő férhet hozzá annak érdekében, hogy az Adatkezelő teljesítse az Ön és az Adatkezelő között létrejött szerződést.</p>
   <p>Az Adatkezelő adatfeldolgozókat vesz igénybe egyes adatkezelési műveletek elvégzéséhez. Az E-Educatio Zártkörűen Működő Részvénytársaság (székhely: 1111 Budapest, Budafoki út 59.), mint adatfeldolgozó biztosítja az e-Titán Rendszert<sup>1</sup>, melyben az Ön személyes adatai rögzítésre kerülnek. Az Adatkezelővel megbízási jogviszonyban álló Szakoktatók, mint adatfeldolgozók a személyes adatok gyűjtését és rögzítését végezhetik.</p>
   <p>Az e-Titán Rendszer az e-learning rendszerű elméleti képzés megkezdésekor, illetve a képzés befejezésekor továbbítja a közlekedési hatóság részére a közúti járművezetők és közúti közlekedési szakemberek képzésének és vizsgáztatásának részletes szabályairól szóló 24/2005. (IV.21.) GKM rendeletben meghatározott adatokat<sup>2</sup>. Az Adatkezelő a Szakoktató kiválasztását követően továbbítja az Ön adatait a vele megbízási jogviszonyban álló Szakoktatónak a gyakorlati képzés megkezdése érdekében.</p>
   <p>Előfordulhat továbbá, hogy az Adatkezelőnek jogszabályi előírás alapján hatóságok vagy kormányzati szervek részére át kell adnia az Ön személyes adatait. Átadhatunk továbbá Önnel kapcsolatos személyes adatokat akkor is, ha ezt nemzetbiztonsági, jogérvényesítési vagy egyéb közérdekű szempontból szükséges. Az Adatkezelő a hatóságok részére – amennyiben a hatóság a pontos célt és az adatok körét megjelölte – személyes adatot csak annyit és olyan mértékben ad ki, amely a megkeresés céljának megvalósításához elengedhetetlenül szükséges.</p>
   <h3>Adatbiztonsági intézkedések</h3>
   <p>A tényleges adatkezelés az e-Titán Rendszerben történik. Az Adatkezelő megfelelő intézkedésekkel gondoskodik arról, hogy a személyes adatát védje többek között a jogosulatlan hozzáférés ellen vagy azok jogosulatlan megváltoztatása ellen. Így például a hozzáférés célhoz kötött, a hozzáféréshez jogosultak köre korlátozott és pontosan nyilvántartott, valamint az Adatkezelő a személyes adatok kezelése során a hatályos jogszabályoknak megfelelő, az adatkezelés menetét részletesen előíró belső szabályzata<sup>3</sup> alapján jár el.</p>

   <h2>Az adatkezeléssel kapcsolatos jogai</h2>
   <h3>A tájékoztatás kéréshez (hozzáféréshez) való jog</h3>
   <p>Ön a fentebb megadott elérhetőségeken keresztül tájékoztatást kérhet az alábbiakról:</p>
   <L items={['az Adatkezelő milyen személyes adatait, milyen jogalapon, milyen adatkezelési cél miatt, milyen forrásból és mennyi ideig kezeli,','az Adatkezelő kinek, mikor, milyen jogszabály alapján, mely személyes adataihoz biztosított hozzáférést vagy kinek továbbította a személyes adatait.']}/>
   <p>Az Adatkezelő az Ön kérelmét indokolatlan késedelem nélkül, az Ön által megadott elérhetőségre küldött levélben teljesíti.</p>
   <h3>A helyesbítéshez való jog</h3>
   <p>Ön a fentebb megadott elérhetőségeken, valamint az e-Titán Rendszeren belül biztosított felületeken keresztül kérheti, hogy az Adatkezelő helyesbítse személyes adatait, továbbá önállóan módosíthatja megadott e-mail címét. Az Adatkezelő a kérelmét indokolatlan késedelem nélkül teljesíti, és erről az Ön által megadott elérhetőségre küldött levélben, vagy a bejelentés helyén értesíti.</p>
   <h3>A törléshez való jog</h3>
   <p>Ön a fentebb megadott elérhetőségeken keresztül kérheti az Adatkezelőtől a személyes adatainak a törlését, ha az alábbi indokok valamelyike fennáll:</p>
   <L items={['a személyes adatokra már nincs szükség abból a célból, amelyből azokat gyűjtötték vagy más módon kezelték;','Ön visszavonja hozzájárulását, és az adatkezelésnek nincs más jogalapja;','Ön tiltakozik, és nincs elsőbbséget élvező jogszerű ok az adatkezelésre;','az Ön személyes adatait jogellenesen kezelték;','a személyes adatokat az Adatkezelőre alkalmazandó uniós vagy tagállami jogban előírt jogi kötelezettség teljesítéséhez törölni kell;','a személyes adatok gyűjtésére az információs társadalommal összefüggő szolgáltatások kínálásával kapcsolatosan került sor.']}/>
   <p>A törlési kérelmet az Adatkezelő indokolatlan késedelem nélkül teljesíti, továbbá a törlési kérelem teljesítéséről vagy a törlési kérelem jogszerű indokon alapuló megtagadásáról az Ön által megadott elérhetőségen értesíti.</p>
   <h3>Az adatkezelés korlátozásához való jog</h3>
   <p>Az Ön fentebb megadott elérhetőségeken keresztül benyújtott kérésére az Adatkezelő korlátozza az adatkezelést az alábbiak valamelyikének teljesülése esetén:</p>
   <L items={['ha Ön vitatja a személyes adatok pontosságát, ez esetben a korlátozás arra az időtartamra vonatkozhat, amely lehetővé teszi, hogy az Adatkezelő ellenőrizze a személyes adatok pontosságát;','az adatkezelés jogellenes, és Ön ellenzi az adatok törlését, ehelyett kéri azok felhasználásának korlátozását;','az Adatkezelőnek már nincs szüksége a személyes adatokra adatkezelés céljából, de Ön igényli azokat jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez;','Ön tiltakozott az adatkezelés ellen; ez esetben a korlátozás arra az időtartamra vonatkozhat, amíg megállapításra nem kerül, hogy az Adatkezelő jogos indokai elsőbbséget élveznek-e az Ön jogos indokaival szemben.']}/>
   <p>Az Adatkezelő a korlátozott személyes adatokat a tárolás kivételével csak az érintett hozzájárulásával, vagy jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez, vagy más természetes vagy jogi személy jogainak védelme érdekében, vagy az unió, illetve valamely tagállam fontos közérdekéből kezelheti.</p>
   <p>Az Adatkezelő Önt a korlátozás feloldásáról köteles előzetesen tájékoztatni.</p>
   <h3>A tiltakozáshoz való jog</h3>
   <p>Ön a fentebb megadott elérhetőségeken keresztül tiltakozhat az adatkezelés ellen, ha az Adatkezelő a személyes adatait</p>
   <L items={['közvetlen üzletszerzés céljából,','az adatkezelés közérdekű vagy az adatkezelőre ruházott közhatalmi jogosítvány gyakorlásának keretében végzett feladat végrehajtásához,','az Adatkezelő vagy egy harmadik fél jogos érdekeinek érvényesítése céljából,','tudományos és történelmi kutatási célból vagy statisztikai célból kezeli.']}/>
   <p>Tiltakozás esetén, ha az a közvetlen üzletszerzésre vonatkozik, úgy az Adatkezelő a továbbiakban közvetlen üzletszerzés érdekében az Ön személyes adatait tovább nem kezeli.</p>
   <p>Egyéb esetben az Adatkezelő a tiltakozást indokolatlan késedelem nélkül megvizsgálja és annak megalapozottságáról döntést hoz, a döntésről pedig Önt írásban tájékoztatja.</p>
   <h3>Az adathordozhatósághoz való jog</h3>
   <p>Ön jogosult arra, hogy az Ön által az Adatkezelő rendelkezésére bocsátott személyes adatokat tagolt, széles körben használt, géppel olvasható formátumban megkapja, valamint jogosult arra is, hogy – ha ez technikailag megvalósítható – kérje az Adatkezelőtől személyes adatainak egy másik adatkezelőhöz továbbítását.</p>

   <h2>Az adatkezeléssel kapcsolatos jogérvényesítési lehetőségek</h2>
   <p>Az Ön által tapasztalt jogellenes adatkezelés esetén kérjük, hogy először vegye fel a kapcsolatot az Adatkezelővel fentebb megadott elérhetőségeken keresztül, a helyzet békés, megegyezésen alapuló rendezése érdekében. Amennyiben a helyzet nem kerül rendezésre tárgyalásos úton vagy nem kívánja ezt a módot igénybe venni, úgy a következő jogérvényesítési lehetőségei vannak:</p>
   <ul>
    <li>A Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat, az alábbi elérhetőségeken: Székhely: 1125 Budapest, Szilágyi Erzsébet fasor 22/C. Levelezési cím: 1530 Budapest, Pf.: 5. Telefon: +36 (1) 391 1400. Fax: +36 (1) 391 1410. E-mail: <a href="mailto:ugyfelszolgalat@naih.hu">ugyfelszolgalat@naih.hu</a>. Honlap: <a href="https://www.naih.hu" target="_blank" rel="noreferrer">www.naih.hu</a></li>
    <li>Az Ön által tapasztalt jogellenes adatkezelés esetén polgári pert kezdeményezhet az Adatkezelő ellen. A per elbírálása a törvényszék hatáskörébe tartozik. A per – az Ön választása szerint – a lakóhelye szerinti törvényszék előtt is megindítható (a törvényszékek felsorolását és elérhetőségét az alábbi linken keresztül tekintheti meg: <a href="http://birosag.hu/torvenyszekek" target="_blank" rel="noreferrer">birosag.hu/torvenyszekek</a>).</li>
   </ul>

   <h2>Értelmező rendelkezések</h2>
   <L items={['Személyes adat: az Önnel kapcsolatba hozható adat, így például az Ön neve, email címe, arcképe, hangja, azonosító jele, valamint egy vagy több fizikai, fiziológiai, mentális gazdasági, kulturális vagy szociális azonosságára jellemző ismeret, valamint az ezekből levonható következtetés.','Hozzájárulás: az érintett akaratának önkéntes és határozott kinyilvánítása, amely megfelelő tájékoztatáson alapul és amellyel félreérthetetlen beleegyezését adja a rá vonatkozó személyes adatok – teljes körű vagy egyes műveletekre kiterjedő – kezeléséhez.','Adatkezelő: az a természetes vagy jogi személy (pl. korlátolt felelősségű társaság), illetve jogi személyiséggel nem rendelkező szervezet (pl. egyesület), amely meghatározza az adatok kezelésének célját, illetve meghozza és végrehajtja vagy végrehajtatja az adatkezelésre vonatkozó döntéseket.','Adatkezelés: az adatokon végzett művelet, így például a személyes adatok gyűjtése, felvétele, rögzítése, rendszerezése, tárolása, megváltoztatása, felhasználása, lekérdezése, továbbítása, törlése, megsemmisítése, kép- vagy hangfelvétel készítése stb.','Adattovábbítás: az adat meghatározott harmadik személy számára történő hozzáférhetővé tétele.','Adatfeldolgozás: az adatkezelési műveletekhez kapcsolódó technikai feladatok elvégzése, így például az adatok tárolásának biztosítása, könyvelési feladatok ellátása.','Adattörlés: az adatok felismerhetetlenné tétele oly módon, hogy a helyreállításuk többé nem lehetséges.']}/>

   <h2>Egyéb</h2>
   <p>Jelen adatkezelési tájékoztató 2019. május 2-án lép hatályba.</p>
   <p>Szolnok, 2019. május 2.<br/>Szokola-Tóth Melinda, iskolavezető és ügyvezető</p>
   <ol className="footnotes"><li>Az e-Titán képzési adminisztrációs rendszer használata esetén.</li><li>E-learning képzés igénybevétele esetén.</li><li>Saját hatáskörben létrehozható.</li></ol>
  </section>
 </>;
}
