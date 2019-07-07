var message="My name is Sukrit";
var email="sukritdutta@yahoo.com"

alert(message);
alert(email);

//boolean values

var ispositive = true;
alert(ispositive);

//undefined variables.......................................................................................................

var novalues;
alert(novalues);//output shows undefined.......................

//null values

var novaluesdecided=null;
alert(novaluesdecided);

//using objects.............................................................................................................

var foodItemsDetails = {
		"itemcategory":"Drinkable",
		"itemType":"coffee",
		"itemName":"Devenzour",
		"itemCost":"190"
}

var nameOfItem = foodItemsDetails.itemName; //way 1..............
alert(nameOfItem);

var priceOfItem = foodItemsDetails["itemCost"]; //way2...........
alert(priceOfItem);

var disountPrice = foodItemsDetails.itemCost-50;
alert(disountPrice);

//arrays..............................................................................................................

var popularSports = ["football","cricket","tennis","f1"];
var lengthOfPopularSports = popularSports.length;
alert(lengthOfPopularSports);


//array of objects..................................................................
var customerDetails = [
{
	"firstName":"Ravi",
	"lastName":"Kumar",
	"contactNo":8456785259,
	"address":"Bangalore"
},
{
	"firstName":"Mohan",
	"lastName":"Trivedi",
	"contactNo":78954566521,
	"address":"New Delhi"
},
{
	"firstName":"Sachin",
	"lastName":"Rana",
	"contactNo":9996653214,
	"address":"Mumbai"
}]

var arrayLength = customerDetails.length;
alert(arrayLength);
var printFirstName = customerDetails[0].firstName;//printing first name using defined array that one know what to print..........
alert(printFirstName);

for(var i=0;i<arrayLength;i++)//print the array element that one used to print dynamically................................
{
	var printLastNames=customerDetails[i].lastName;
	alert(printLastNames);
}

var checkDiscount = window.prompt('Please tell grand total of the item purchased')//taking input from the user....................

if(checkDiscount>500)
{
	alert('You got a discount of 10%')
}
else{
	alert('You are not elegible for discount. Minimum bill 500')
}