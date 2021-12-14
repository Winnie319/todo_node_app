const http = require('http');

const server  = http.createServer(function(req, res){
    console.log(req.url);
    if(req.method === 'POST' && req.url === '/movies'){
        res.end('You just made a POST to add movies')
    }else if (req.method === 'GET' && req.url === '/movies'){
        res.end('You just made a GET to get all movies')
    }else if(req.method=== 'PUT' && req.URL ==='/movies'){
        res.end('You just made a PUT to modify ')
    }
    }
    
);

server.listen(4000, function(){
    console.log('Server has started to run');
});