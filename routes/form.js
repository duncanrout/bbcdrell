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
  var str = "<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width, initial-scale=1'><style>* {  box-sizing: border-box;}#myInput {  background-image: url('/css/searchicon.png');  background-position: 10px 10px;  background-repeat: no-repeat;  width: 100%;  font-size: 16px;  padding: 12px 20px 12px 40px;  border: 1px solid #ddd;  margin-bottom: 12px;}#myTable {  border-collapse: collapse;  width: 100%;  border: 1px solid #ddd;  font-size: 18px;}#myTable th, #myTable td {  text-align: left;  padding: 12px;}#myTable tr {  border-bottom: 1px solid #ddd;}#myTable tr.header, #myTable tr:hover {  background-color: #f1f1f1;}</style></head><body><h2>Business Data</h2><input type='text' id='myInput' onkeyup='myFunction()' placeholder='Search for a Business..' title='Type in a name'> <script src='https://www.kryogenix.org/code/browser/sorttable/sorttable.js'></script><table class='sortable' id='myTable'><tr> <th>Company</th>    <th>Province</th>    <th>Number of Employees</th>  </tr>"
  const filtered = data.filter(business => {
    //business is a json object of each business cluster
  	let isValid = true
    for (key in filters) {
    	//console.log(key, business[key], filters[key])
    	//Looks at specific keyl.. isValid = isValid && business[key] == filters[key]
      isValid = isValid && business[key].includes(filters[key])
      if(isValid == true)
      {
          str = str +   "<tr>    <td>" + business.B + "</td>    <td>" + business.G + "</td>    <td>" + business.AA+ "</td>  </tr>";
      }
  	}
  	return isValid
  });
  res.setHeader('Content-type','text/html')
  str = str + "</table> <script>function myFunction() {  var input, filter, table, tr, td, i, txtValue;  input = document.getElementById('myInput');  filter = input.value.toUpperCase();  table = document.getElementById('myTable');  tr = table.getElementsByTagName('tr');  for (i = 0; i < tr.length; i++) {    td = tr[i].getElementsByTagName('td')[0];    if (td) {      txtValue = td.textContent || td.innerText;      if (txtValue.toUpperCase().indexOf(filter) > -1) {        tr[i].style.display = '';      } else {        tr[i].style.display = 'none';      }    }  }}</script></body></html>";
  res.send(str)
  //res.send("<h1>Hello, The temperature in " + filtered +"</h1>")
});

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router
