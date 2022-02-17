const express = require("express")

//Initialize App
const app = express()

//serves all files in public folder
app.use(express.static("public"))

//allows us to access info coming from forms
app.use(express.urlencoded({ extended: true }))

app.use(express.json())
app.set('view engine', 'ejs')

//links route to particular path, it mounts the router
const userRouter = require("./routes/form")

app.use("/form", userRouter)

app.get("/about",function(req,res){
  res.sendFile(__dirname+'/about.html')
})

app.listen(3000)
