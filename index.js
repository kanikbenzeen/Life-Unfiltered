const express =  require('express')
const router  = require("./routes/post")
const validateUser = require("./routes/user.js")
const app = express()
const PORT = 4200
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// const userRouter = require("./routes/user.js")
var path = require('path');
const hbs = require('hbs')


app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, '/public')));
hbs.registerPartials(__dirname + '/views/partials', function (err) {});







app.use('/auth',validateUser)
app.use('/', router)

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})



