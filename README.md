# this function creates a list of meal names under a specific type of food 
the specificMealName list loops through the typesOfFood and if the tpye of food matches
then it gets added to the list
if there is zero items in the list then it returns "no meals found"

# this function creates a list of resturants that sell whatever type of food is inputed
this loop goes through and checks if the type of food matches then after adds it
the name of the resturant to the list without duplicates.
if there is zero items in the list then it returns "no items avalible"

# this function creates a list of meal from a spesific resturant 
it will list all the meals from that resturant also with their protien count
if the name in not fully complete then it will still register as in 
"wendy" for "wendys" so you can partley include the name 
if there is zero items in the list then it returns "resturant not found"

# this function creates a avergae calorie count of all the items from that resturant
it adds up total number of calories and adds 1 to the numingroup if it is
from that resturant, after it gets the total it divides the total by the 
number of numbers in the numInGroup
if the name in not fully complete then it will still register as in 
"wendy" for "wendys" so you can partley include the name 
if there is zero items in the list then it returns "resturant not found"

# this function is trying to find the lowest calorie item and name under a spesific type of food
it goes through the type of food list  then sees if the calories count is less and if it is
it makes that the new lowest calorie item and contiues to do that until it finds the lowest 
calorie item in that type of food
it will return both the name of meal and the amount of calories
if there is zero items in the list then it returns "type not found"
