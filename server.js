const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()

const router = jsonServer.router('db/db.json')

// Bind the router db to the app
app.db = router.db

app.use(auth.rewriter({

}))
app.use(auth)
app.use(router)
app.listen(4000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = app
