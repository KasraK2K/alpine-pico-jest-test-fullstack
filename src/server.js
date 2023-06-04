const { app, server, port } = require('./http/core')
const routes = require('./http/routes')

app.use('/v1', routes)

server.listen(port, () => console.log(`Server running on http://localhost:${process.env.PORT}`))
