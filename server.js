const express = require("express")
const app = express()

//serves all files in public folder
app.use(express.static("public"))
//allows us to access info coming from forms
app.use(express.urlencoded({ extended: true }))
//links route to particular path, it mounts the router

app.use(express.json())
app.set('view engine', 'ejs')

const userRouter = require("./routes/form")

app.use("/form", userRouter)

app.get("/about",function(req,res){
  res.sendFile(__dirname+'/public/about.html')
})

app.listen(3000)
