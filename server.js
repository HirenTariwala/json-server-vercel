const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()

const router = jsonServer.router('db/db.json')

app.use(jsonServer.bodyParser)
app.db = router.db

const rules = auth.rewriter({
  users: 600,
});

app.use(rules)
app.use(auth)
app.use(router)
app.listen(4000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = app
