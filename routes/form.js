const express = require("express")
const router = express.Router()
const data = require('./data');
//reads in the json file as a string

router.use(logger)

router.get("/companyQuery", (req, res) => {
  res.render("companyQuery", {qs : req.query})
})

router.get("/companyQuery/results", (req, res, next) => {
  //Temporary Soln for formatting of data.js
  console.log(req.query.searchValue)
  const filters = { B: req.query.searchValue }
  const filtered = data.filter(business => {
    //business is a json object of each business cluster
  	let isValid = true
    for (key in filters) {
    	//console.log(key, business[key], filters[key])
    	//Looks at specific keyl.. isValid = isValid && business[key] == filters[key]
      isValid = isValid && business[key].includes(filters[key])
      console.log(isValid)
  	}
  	return isValid
  });
  res.send(filtered)
});

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
