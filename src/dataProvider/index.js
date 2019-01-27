const request = require.context('./', true, /^((?!index).)*\.js$/)

let dp = {}

request.keys().forEach(path => {
  const file = request(path)

  path = path.replace(/(\.\/|\.js)/gi, '').split('/')
  const fileName = path[0]

  dp[fileName] = file
})

export default dp
