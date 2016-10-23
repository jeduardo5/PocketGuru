const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
	console.log(request.url)
	response.end('Hello server')
}

const server = http.createServer(requstHandler)

server.listen(port, (err) => {
	if (err) {
		return console.log('something bad')
	}
	console.log('server is listening on ${port}')
})