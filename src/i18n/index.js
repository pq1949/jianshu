import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
const DEFAULT_LANGUAGE = 'zh'


function addResources () {
  const request = require.context('./locales', true, /\.json$/)
  const files = request.keys()
  files.forEach(path => {
    const localeResource = request(path)
    path = path.replace(/(\.\/|\.json)/ig, '').split('/')
    const language = path[0] // en , zh, zh-HK
    const ns = path[1] // common , header, error
    i18n.addResourceBundle(language, ns, localeResource, true, true)
  })
}

i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    fallbackNS: 'common',
    defaultNS: 'common',
    debug: true
  })

addResources()

export default i18n
