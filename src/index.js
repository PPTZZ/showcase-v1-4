import './scripts/data.js'
import { ENDPOINT, getData } from './scripts/data.js'


getData(ENDPOINT).then(data=>console.log(data));
