1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
var http = require('http')
var url = require('url')

var port = process.argv[2]

var parseTime = function (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixTime(time) {
    return { unixtime: time.getTime() }
}

var parseQuery = function (url) {
    switch (url.pathname) {
        case '/api/parsetime':
            return parseTime(new Date(url.query.iso))
        case '/api/unixtime':
            return unixTime(new Date(url.query.iso))
        default: return 'please enter a valid endpoint url'
    }
}

http.createServer(function (request, response) {
    if (request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        url = url.parse(request.url, true)
        response.end(JSON.stringify(parseQuery(url)))
    } else {
        response.writeHead(405)
        response.end()
    }
}).listen(+port, function () {
    console.log('Server listening on http://localhost:%s', port)
})