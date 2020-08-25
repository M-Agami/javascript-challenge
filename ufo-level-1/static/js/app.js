// from data.js
var tableData = data;

//buttons
var button = d3.select("#filter-btn");
var form = d3.select("#form")

button.on("click", runEnter);
form.on("submit", runEnter);

var table = d3.select('#table');
var tableDate = table.select('#th[0]');
var tableCity = table.select('#th[1]');
var tableState = table.select('#th[2]');
var tableCountry = table.select('#th[3]');
var tableShape = table.select('#th[4]');
var tableDuration = table.select('#th[5]');
var tableComments = table.select('#th[6]');
var body = d3.select("tbody");



function rowMaker(list) {
    list.forEach(Element => {
    var row = body.append("tr");
    Object.entries(Element).forEach(([key, value]) => {var cell= row.append("td");
    cell.text(value);
})
    
    } );
    
}

function runEnter() {
    //prevent refresh
    d3.event.preventDefault();
    body.html(" ");
//declare vars
    var inputElement = d3.select('.form-control');
    var inputValue = inputElement.property("value");
    var filteredDate = tableData.filter(entry => entry.datetime === inputValue);
    console.log(filteredDate); 
    console.log(inputValue);
    rowMaker(filteredDate);
}


