import { getHost } from '../env'
const api = getHost()

export const getCarouselInfo = api + '/data/carouseInfo.json'

export const getArticleAbstract = api + '/data/abstractInfo.json'
