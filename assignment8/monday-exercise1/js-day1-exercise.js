
//###################################################################
// 1.1.1

let names = ["Lars", "Peter", "Jan", "Bo"];


// 1.1.2

//----
function callbackForMyFilter (element){

    if(element.length <= 3){
        return true;
    }
    return false;
} 


function myFilter (array, callback){

    let filteredArrayToReturn = [];
    
    for( let i = 0; i < array.length; i++){
        
        if(callback(array[i])){
            filteredArrayToReturn.push(array[i]);
        }
    }
    return filteredArrayToReturn;
}


let arrayFromMyFilter = myFilter(names, callbackForMyFilter);

console.log(arrayFromMyFilter);


//----
let callbackForMyFilter2 = (element) => {if(element.length <= 4){
    return true;
}else{
    return false;
}}


function myFilter2 (array, callback){

    let filteredArrayToReturn = [];

        for(let i = 0; i < array.length; i++){
            
            if(callback(array[i])){

            filteredArrayToReturn.push(array[i]);
            }
        }

        return filteredArrayToReturn;
    }


let arrayFromMyFilter2 = myFilter2(names, callbackForMyFilter2);
console.log(arrayFromMyFilter2);



// 1.1.3

//----
let callbackForMyMap = (element) => {
    return element.toUpperCase();
};

function myMap (array, callback){

    let arrayToReturn = []

        for(let i = 0; i < array.length; i++){
        
            arrayToReturn.push(callback(array[i]));
            }
        

        return arrayToReturn;
    }


let mappedArray2 = myMap(names, callbackForMyMap)

console.log("Mapped array: \n" + mappedArray2);




//###################################################################
// 1.2

//myFilter
let callbackForMyFilter3 = (element) => {if(element.length <= 3){
    return true;
}else{
    return false;
}}

Array.prototype.myFilter3 = function (callback){
    
    let filteredArrayToReturn = [];

        for(let i = 0; i < this.length; i++){
            
            if(callback(this[i])){

            filteredArrayToReturn.push(this[i]);
            }
        }

        return filteredArrayToReturn;
    }

let filteredArray3 = names.myFilter3(callbackForMyFilter3);

console.log("Filtered array from attached array: \n" + filteredArray3);


// myMap
let callbackForMyMapAttachedToArray = (element) => {
    return element.toUpperCase();
};


Array.prototype.myMap2 = function (callback){

    let arrayToReturn = []
        for(let i = 0; i < this.length; i++){
            
            arrayToReturn.push(callback(this[i]));
            }
        

        return arrayToReturn;
    }


let mappedArrayFromAttachedArray = names.myMap2(callbackForMyMap);

console.log("Mapped array from attached array: \n" + mappedArray2);




//###################################################################
// 1.3

// 1.3.1

let arrayOfDivs = document.getElementsByTagName('div');


Array.from(arrayOfDivs).forEach(element => {
    element.style.padding = "20px"; 
    element.style.border = "solid black";
    element.style.margin = "10px"; 
    
    element.style.width = "200px";
    element.style.height = "100px";

    element.style.backgroundColor = "red"
});


// 1.3.2

document.getElementById('colorButton').addEventListener('click', function() {
    
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
  
    div1.style.backgroundColor = "grey";
    div2.style.backgroundColor = "white";
    div3.style.backgroundColor = "gold";

});

//###################################################################
// 1.4

// See js-day1-exercise1-page2.js






//###################################################################
// 1.1.1
//###################################################################
// 1.1.1
//###################################################################
// 1.1.1
//###################################################################
// 1.1.1
//###################################################################
// 1.1.1
//###################################################################
// 1.1.1
//###################################################################
// 1.1.1
//###################################################################
// 1.1.1
