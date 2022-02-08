const express = require("express")
const router = express.Router()

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
    console.log(req.body.firstName)
    form.push({ firstName: req.body.firstName })
    res.redirect(`/form/${form.length - 1}`)
  } else {
    console.log("Error")
    res.render("companyQuery", { firstName: req.body.firstName })
  }
})

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
  })

const form = [{ name: "Kyle" }, { name: "Sally" }]
router.param("id", (req, res, next, id) => {
  req.user = form[id]
  next()
})

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
