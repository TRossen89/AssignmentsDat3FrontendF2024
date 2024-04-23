//###################################################################
// 0.1

let arrayOfNames = ["Lars", "Jan", "Peter", "Bo", "Frederik", "Kim"];

let filteredArray = arrayOfNames.filter(element => element.length <= 3);

console.log("Original array: ");
arrayOfNames.forEach(element => console.log("Name: " + element));

console.log("Filtered array: ")
filteredArray.forEach(element => console.log("Name: " + element));




//###################################################################
// 0.2

let arrayInUpperCase = filteredArray.map((element) => element.toUpperCase());

console.log("Uppercase array: ")
arrayInUpperCase.forEach(element => console.log("Name: " + element));




//###################################################################
// 0.3

function makingHtmlList(someArray){
    let htmlArray = someArray.map((element) => "<li>" + element + "</li>");
    
    let arrayAsString = htmlArray.join(" ");

    let htmlString = "<ul>" + arrayAsString + "</ul>";

    return htmlString;
}

htmlString = makingHtmlList(arrayOfNames);

console.log(htmlString);




//###################################################################
// 0.4

let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand C', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

 
// 0.4.1

let carsNewerThan1999 = cars.filter(car => car.year > 1999);

let allVolvos = cars.filter(car => car.make === "Volvo");

let carsPriceBelow5000 = cars.filter(car => car.price < 5000);

console.log("Cars newer than 1999: \n", carsNewerThan1999, "\n\n All Volvos: \n", allVolvos, "\n\n Car with price under 5000: \n", carsPriceBelow5000);


// 0.4.2

function makinSQLStatement (cars){

    let mappedArray = cars.map((element) => "INSERT INTO cars (id, year, make, model, price) \
VALUES (" + element.id + ", " + element.year + ", " + element.make + ", " + element.model + ", " + element.price + ");");

    let arrayAsString = mappedArray.join("\n");

    return arrayAsString;
}

let sqlStatementsAsOneString = makinSQLStatement(cars);

console.log(sqlStatementsAsOneString);

