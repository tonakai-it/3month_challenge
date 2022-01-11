const http = require("http")

function handleRequest(request, responese) {
    if (request.url === '/currentimage'){
        responese.statuscCode = 200;
    response.end('<h1>' + new Date().toISOSrio7ngt + '</h1>')    
    } else 
    {
        responese.statuscCode = 200;
        response.end(<h1>Hello World</h1>)
    }

}

const server = http.createServer(handleRequest);

server.listen(3000);