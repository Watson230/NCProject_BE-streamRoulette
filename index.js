const app = require('./server').app;
const PORT = require('./config').PORT[process.env];
const apirouter =  require('./route/apiRoute').router
const mongooseConnect = require('./server').mongooseConnect
const bodyParser = require('body-parser');
var cors =require('cors');



mongooseConnect()

app.use(cors())
app.use(bodyParser.json());

app.use('/api',apirouter)


app.listen(process.env, function () {
    console.log(`listening on port ${process.env}`);
  })