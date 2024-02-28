const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()

const router = jsonServer.router('db/db.json')

const middlewares = jsonServer.defaults()
app.use(middlewares)
app.db = router.db

app.use(auth)
app.use(router)
app.listen(4000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = app
