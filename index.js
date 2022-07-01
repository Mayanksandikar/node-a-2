

const exppress = require('express');

const app = exppress();

let port = 4000;

app.get('/',function(req,res){
    
    res.send('<h1>Express  nmp i express </h1>');
})

app.get('/api/data',function(req,res){
    res.send("<h1>Express</h1><p style={color:red}>Express is a flexible Node.js web application framework that provides a wide set of features to develop both web and mobile applications</p>");
})


console.log('Its Working index.js file');

app.listen(port,function(){ return console.log(`Its working on ${port}`)});