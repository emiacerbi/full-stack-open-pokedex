const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

app.get('/health', () => {
  throw 'error...'
})

app.get('/version', (req, res) => {
  res.send('2') // change this string to ensure a new version deployed
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5001')
})
