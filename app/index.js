const experss = require('express');
const app = experss();
const port = 3000;
const hostname = '0.0.0.0';
app.get('/',(req,res)=>{ res.send('hola mundo')});
app.listen(port,hostname,()=>{
    console.log('server escuchando puerto 3000');
});