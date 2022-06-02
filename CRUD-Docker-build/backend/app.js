const express = require('express');
const restful = require("node-restful");
const server = express();
const mongoose = restful.mongoose;
const bodyParser = require('body-parser');
const cors = require('cors')

//A biblioteca promise do mongoose não e mais mantida e está deprecate por isso e necessario importar as promises do proprio node
mongoose.Promise = global.Promise
mongoose.connect("mongodb://db/mydb")

//Middlewares
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

//ODM = Mapeamento Objeto documento
const Client = restful.model('Client',{
    name: {type: String , required : true}
})

//Rest API
Client.methods(['get','put','post','delete'])
Client.updateOptions({new : true, runValidators:true})

//Routes
Client.register(server,'/clients')


server.listen(3000)
