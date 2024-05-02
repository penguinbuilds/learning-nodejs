const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome to our homepage!')
        res.end()
    } else if (req.url === '/about') {
        res.end('Here is the about.')
    }
    
    res.end(`
    <h1>Oops!</h1>
    <p>Page does not exist.</p>
    <a href="/">Go back home</a>
    `)
})

server.listen(5000)