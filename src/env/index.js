export const getHost = () => {
  let host = ''
  if (window && window.location && window.location.host && ~window.location.host.indexOf('github')) {
    host = '/jianshu'
  }
  return host
}
