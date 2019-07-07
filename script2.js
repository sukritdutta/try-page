//conditional operator..................

var marksObtained = window.prompt('Enter the marks obtained by the candidate');

if(marksObtained==null||marksObtained=="")
{
	alert('Marks cannot be empty');
}
else if(marksObtained<0||marksObtained>100)
{
	alert('marks should be between 0 to 100');
}
else{
	marksObtained=Number(marksObtained);
	var fullMarks=100;
	var percentage=(marksObtained/fullMarks)*100;
	
	if(percentage>90)
	{
		alert('Topper');
	}
	else{
		alert('Not a Topper');
	}
}

// for-in loop.................................................................used for objects
var user={
	name:"Sukrit Dutta",
	email:"sukritdutta@yahoo.com",
	mobile:"1234567890"
} 

for(i in user)
{
	alert(user[i])
}

//for-in loop................................................................used in array of objects

var products=[
{
	"productId":"587",
	"productName":"Rice"
},
{
	"productId":"999",
	"productName":"Wheat"
}
]

for(x in products)
{
	alert(products[x].productId)
	alert(products[x].productName)
}