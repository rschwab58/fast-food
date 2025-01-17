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

//this function is making a list of meals that are in the catagorie of pizza
//

function specificMealName(typeOfFood){
    var specificMealName =[]
    for(var i=0; i < typeOfFoods.length; i++) {
        if(typeOfFoods[i].toLowerCase() == typeOfFood.toLowerCase()) { 
        specificMealName.push(mealName[i]);
        }
    }
    if(specificMealName.length == 0){
        specificMealName.push("meal item not found")
    }
    return specificMealName;
}
console.log(specificMealName("pizza"))

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
console.log(specificResturantName("pizza"))



function amountOfProteinInAMeal(nameOfResturant){
    // if(typeOf(nameOfResturant) != string){
    //     return ["enter a string"];
    // }
    var proteinInAMeal =[]
    for(var i=0; i < resturant.length; i++){
        if(resturant[i].toLowerCase().includes(nameOfResturant.toLowerCase() )){
            proteinInAMeal.push(mealName[i] + ": " + protein[i]);
            }
        }
        if (proteinInAMeal.length == 0){
            proteinInAMeal.push("resturant not found")
        }
        return proteinInAMeal;
    }
console.log(amountOfProteinInAMeal("wendy"))

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
console.log(averageAmountOfCaloriesPerResturant("wendy"))

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
