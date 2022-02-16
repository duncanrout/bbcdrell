const express = require("express")
const router = express.Router()

//reads in the json file as a string
const fs = require('fs')
const data = fs.readFileSync('./businessdata.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    //console.log('File data:', jsonString)
})

//parses the string to an object... example of how to access: json[1]['B']
var json = JSON.parse(data)
console.log(json[1]['B'])


router.use(logger)
router.get("/", (req, res) => {
  //how we are to pull data from query
  console.log(req.query.name)
  res.send("temp")
})

router.get("/companyQuery", (req, res) => {
  res.render("companyQuery")
})

router.post("/", (req, res) => {
  const isValid = true
  if (isValid) {
    //console.log(req.body.searchValue)
    form.push({ searchValue: req.body.searchValue })
    form.push({ city: 1 })
    form.push({ phone: 1 })
    form.push({ website: 1 })
    console.log(form)
    res.redirect(`/form/${form.length - 1}`)
  } else {
    console.log("Error")
    res.render("companyQuery", { searchValue: req.body.searchValue })
  }
})

const form = []

router.param("id", (req, res, next, id) => {
  req.user = form[id]
  next()
})

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    //res.send(`Get ID ${req.params.id}`)
    const string = form[1]
    console.log(string)
    res.send(`Form: ${JSON.stringify(form[0])}`)
  })
  .put((req, res) => {
    res.send(`Update ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete ID ${req.params.id}`)
  })

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
