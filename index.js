const express =  require('express')
const router  = require("./routes/post")
const app = express()
const PORT = 4200
const userRouter = require("./routes/user.js")
var path = require('path');
const hbs = require('hbs')


app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, '/public')));
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.use("/", router)
app.use("/", userRouter)
app.listen(PORT, ()=>{
    console.log(`server working at http://localhost:${PORT}`)
})