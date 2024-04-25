
//###################################################################
// 1.4


// 1.4.1
// See js-exercise1-page2.html and js-exercise1.css

// 1.4.2
document.getElementById('div12').addEventListener('click', function(event) {
    const divId = event.target.id;
    console.log("Hi from " + divId)});

document.getElementById('div22').addEventListener('click', function(event) {
    const divId = event.target.id;
    console.log("Hi from " + divId)});


    

// 1.4.3
// See js-exercise1-page2.html




// 1.4.4 and 1.4.6. See also js-exercise1-page2.html

document.getElementById('outer').addEventListener('click', function(event) {

    const divId = event.target.id;

    document.getElementById('output').innerText = 'Hi from ' + divId;
    console.log("Hi from outer")});


// 1.4.5


document.getElementById('div32').addEventListener('click', function(event) {
    const divId = event.target.id;
    console.log("Hi from " + divId)});

document.getElementById('div42').addEventListener('click', function(event) {
    const divId = event.target.id;
    console.log("Hi from " + divId)});

document.getElementById('div52').addEventListener('click', function(event) {
    const divId = event.target.id;
    console.log("Hi from " + divId)});

document.getElementById('div62').addEventListener('click', function(event) {
    const divId = event.target.id;
    console.log("Hi from " + divId)});

document.getElementById('div72').addEventListener('click', function(event) {
    const divId = event.target.id;
    console.log("Hi from " + divId)});

document.getElementById('div82').addEventListener('click', function(event) {
    const divId = event.target.id;
    console.log("Hi from " + divId)});

document.getElementById('div92').addEventListener('click', function(event) {
    const divId = event.target.id;
    console.log("Hi from " + divId)});

document.getElementById('div102').addEventListener('click', function(event) {
    const divId = event.target.id;
    console.log("Hi from " + divId)});

document.getElementById('div112').addEventListener('click', function(event) {
    const divId = event.target.id;
    console.log("Hi from " + divId)});

document.getElementById('div122').addEventListener('click', function(event) {
    const divId = event.target.id;
    console.log("Hi from " + divId)});



//###################################################################
// 1.5



// 1.5.1
let arrayOfNames = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Kim"];
    
    
function makingHtmlList(someArray){

    let htmlArray = someArray.map((element) => "<li>" + element + "</li>");
    
    let arrayAsString = htmlArray.join(" ");

    let htmlString = "<ul>" + arrayAsString + "</ul>";
    
    document.getElementById("divForList").innerHTML = htmlString
}

makingHtmlList(arrayOfNames);


// 1.5.2

document.getElementById("addNameButton").addEventListener('click', function(event){
  
    event.preventDefault();
    
    const newName = document.getElementById('newName').value;
    
    arrayOfNames.push(newName);
    
    makingHtmlList(arrayOfNames);
    
})


// 1.5.3

document.getElementById("removeFirst").addEventListener('click', function(event){
  
    event.preventDefault();

    arrayOfNames.shift();
    
    makingHtmlList(arrayOfNames);
    
})

document.getElementById("removeLast").addEventListener('click', function(event){
  
    event.preventDefault();

    arrayOfNames.pop();
    
    makingHtmlList(arrayOfNames);
    
})



//###################################################################
// 1.6


let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand C', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

function makingHtmlTable (cars){

    let mappedArray = cars.map((element) => "<tr> <td>" + element.id + "</td> <td> " + element.year + " </td> <td> " 
     + element.make + " </td> <td> " + element.model + " </td> <td> " + element.price + " </td> </tr>");

    let arrayAsString = mappedArray.join(" ");

    let htmlTableAsString = "<table id='tableForCars'> <tr> <th> Id </th> <th> Year </th> <th> Make </th> <th> Model </th> <th> Price </th> </tr>" + arrayAsString + "</table>";

    document.getElementById("divForCars").innerHTML = htmlTableAsString;

}


makingHtmlTable(cars);
