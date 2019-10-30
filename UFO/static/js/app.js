// from data.js
var tableData = data;
//initially define variables
let
    dates = tableData.map(d => d.datetime)
    city = tableData.map(d => d.city)
    state = tableData.map(d => d.state)
    country = tableData.map(d => d.country)
    shape = tableData.map(d => d.shape)
    duration = tableData.map(d => d.durationMinutes)
    comments = tableData.map(d => d.comments)


// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // clear table contents
    d3.select("#ufo-table>tbody").html("");
    // Select the input value from the form
    let filterDate = d3.select("#datetime").property("value");
    console.log(filterDate);
    // clear the input value
    d3.select("#datetime").node().value = "";
    
    //upload new data
    tableData = tableData.filter(d => d.datetime === filterDate)
    dates = tableData.map(d => d.datetime)
    city = tableData.map(d => d.city)
    state = tableData.map(d => d.state)
    country = tableData.map(d => d.country)
    shape = tableData.map(d => d.shape)
    duration = tableData.map(d => d.durationMinutes)
    comments = tableData.map(d => d.comments)
    //build table
    buildTable(dates, city, state, country, shape, duration, comments)

} 

async function buildTable(dates, city, state, country, shape, duration, comments) {
    // YOUR CODE HERE
    const tbody = await d3.select("#ufo-table>tbody");
    for (let i=0; i<dates.length; i++){
        const trow = tbody.append("tr");
        trow.append("td").text(dates[i]);
        trow.append("td").text(city[i]);
        trow.append("td").text(state[i]);
        trow.append("td").text(country[i]);
        trow.append("td").text(shape[i]);
        trow.append("td").text(duration[i]);
        trow.append("td").text(comments[i]);
    }
}

// Add event listener for submit button
d3.select("#filter-btn").on("click", handleSubmit);

buildTable(dates, city, state, country, shape, duration, comments);


