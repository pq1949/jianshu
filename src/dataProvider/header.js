import { getHost } from '../env'
const api = getHost()

export const getTrending = api + '/data/trending.json'
