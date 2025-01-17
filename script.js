var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Fast%20Food%20Nutrition.csv"

var mealName = getColumn(url, 1);
var typeOfFoods = getColumn(url, 2);
var resturant = getColumn(url, 3);
var calories = getColumn(url, 4);
var fatGs = getColumn(url, 5);
var protein = getColumn(url, 6);
var carbohydrates = getColumn(url, 7);
var cholestral = getColumn(url, 8);
var saturatedFats= getColumn(url, 9);
var sodium = getColumn(url, 10);

// this function creates a list of meal names under a specific type of food 
// the specificMealName list loops through the typesOfFood and if the tpye of food matches
// then it gets added to the list
//if there is zero items in the list then it returns "no meals found"
function specificMealName(typeOfFood){
    var specificMealName =[]
    for(var i=0; i < typeOfFoods.length; i++) {
        if(typeOfFoods[i].toLowerCase() == typeOfFood.toLowerCase()) { 
        specificMealName.push(mealName[i]);
        }
    }
    if(specificMealName.length == 0){
        specificMealName.push("no meals found")
    }
    return specificMealName;
}
//console.log(specificMealName("pizza"))

// this function creates a list of resturants that sell whatever type of food is inputed
//this loop goes through and checks if the type of food matches then after adds it
//the name of the resturant to the list without duplicates.
//if there is zero items in the list then it returns "no items avalible"
function specificResturantName(typeOfFoodAtResturant){
    var specificResturantName =[]
    for(var i=0; i < typeOfFoods.length; i++) {
        if(typeOfFoods[i].toLowerCase() == typeOfFoodAtResturant.toLowerCase() && !specificResturantName.includes(resturant[i]) ) { 
            specificResturantName.push(resturant[i]);
        }
    }
    if(specificResturantName.length == 0){
        specificResturantName.push("no items avalible")
    }
    return specificResturantName;
}
//console.log(specificResturantName("pizza"))

// this function creates a list of meal from a spesific resturant 
// it will list all the meals from that resturant also with their protien count
// if the name in not fully complete then it will still register as in 
// "wendy" for "wendys" so you can partley include the name 
//if there is zero items in the list then it returns "resturant not found"
function amountOfProteinInAMeal(nameOfResturant){
    // if(typeOf(nameOfResturant) != string){
    //     return ["enter a string"];
    // }
    var proteinInAMeal =[]
    for(var i=0; i < resturant.length; i++){
        if(resturant[i].toLowerCase().includes(nameOfResturant.toLowerCase() )){
            proteinInAMeal.push(mealName[i] + ": with " + protein[i]+ " grams of protein");
            }
        }
        if (proteinInAMeal.length == 0){
            proteinInAMeal.push("resturant not found")
        }
        return proteinInAMeal;
    }
//console.log(amountOfProteinInAMeal("wendy"))

// this function creates a avergae calorie count of all the items from that resturant
//it adds up total number of calories and adds 1 to the numingroup if it is
//from that resturant, after it gets the total it divides the total by the 
//number of numbers in the numInGroup
// if the name in not fully complete then it will still register as in 
// "wendy" for "wendys" so you can partley include the name 
//if there is zero items in the list then it returns "resturant not found"
function averageAmountOfCaloriesPerResturant(nameOfResturant){
    var toltalCaloriesInAMeal = 0; 
    var numInGroup = 0;
    for(var i=0; i < resturant.length; i++){
        if(resturant[i].toLowerCase().includes(nameOfResturant.toLowerCase() )){
            toltalCaloriesInAMeal += parseFloat(calories[i]);
            numInGroup += 1;
        }
    }
        if (toltalCaloriesInAMeal.length == 0){
            toltalCaloriesInAMeal.push("resturant not found")
    }
        return toltalCaloriesInAMeal/numInGroup;
}
//console.log(averageAmountOfCaloriesPerResturant("wendy"))

// this function is trying to find the lowest calorie item and name under a spesific type of food
// it goes through the type of food list  then sees if the calories count is less and if it is
//it makes that the new lowest calorie item and contiues to do that until it finds the lowest 
//calorie item in that type of food
// it will return both the name of meal and the amount of calories
//if there is zero items in the list then it returns "type not found"
function minAmountOfCaloriesInAMeal(foodType){
    var minCaloriesInMeal = 500000000;
    var lowestCalItem = ""
    for(var i=0; i < resturant.length; i++){
        // console.log(typeOfFoods[i])
        if(typeOfFoods[i].toLowerCase().includes(foodType.toLowerCase()) && minCaloriesInMeal > parseFloat(calories[i])){
            minCaloriesInMeal = parseFloat(calories[i]);
            lowestCalItem = mealName[i];
            }
    }
    if (lowestCalItem.length == 0){
        return "type not found"
    }
    return lowestCalItem + ", and has calories " + minCaloriesInMeal ;
       
    }
console.log(minAmountOfCaloriesInAMeal("pizza"))


function getColumn(url, columnNumber){
    var column = [];
    var table = [];
    var request = new XMLHttpRequest();  
    request.open("GET", url, false);   
    request.send(null);  
    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
    }
    table = csvData;
    column = getCol(table, columnNumber);
    return column;
  }
  
  //returns the specified column from a 2D Array
  function getCol(matrix, col){
         var column = [];
         for(var i=1; i<matrix.length-1; i++){
            column.push(matrix[i][col]);
         }
         return column;
      }