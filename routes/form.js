const express = require("express")
const router = express.Router()
const data = require('./data');
//reads in the json file as a string

router.use(logger)
/*router.get("/", (req, res) => {
  //how we are to pull data from query
  //console.log(req.query.name)
  res.send("temp")
})*/

router.get("/companyQuery", (req, res) => {
  res.render("companyQuery")
})

router.post('/', (req, res, next) => {
  //const filters =   req.query
  filters = { A: '01008118914' }
  //example... localhost:3000/?A=uid&B=name
  const filteredUsers = data.filter(user => {
  	let isValid = true
    for (key in filters) {
    	console.log(key, user[key], filters[key])
    	isValid = isValid && user[key] == filters[key]
  	}
  	return isValid
  });
  res.send(filteredUsers)
});

/*router.post("/", (req, res) => {
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
*/

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
