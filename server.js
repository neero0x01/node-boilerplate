import express from 'express'
import alert from 'awesome-cli-alerts'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`API running`)
})

app.listen(PORT, () => {
  alert({
    type: `success`,
    msg: `server running on ${process.env.NODE_ENV} mode on http://localhost:${PORT}`,
    name: `server`,
  })
})
