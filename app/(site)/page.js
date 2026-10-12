import Site from './site';
import {readNews} from '../news-store';

export default async function Page(){const {news,office}=await readNews();return <Site news={news} office={office}/>}
