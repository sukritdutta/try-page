//arrow function..........
let multiply = (a,b) =>
{
	console.log(a);
	console.log(b);
	return a*b;
	
}

console.log(multiply(5))

let emailGenerate = (name,message)=>
{
	let emailMessage = "Hi "+name+"\n"+"This is the message for you "+message ;
	return emailMessage;
}
console.log(emailGenerate("Sukrit","You are using arrow"))

//REST....................................

let allUserAddress = [];

let userAddress = (userId,...address)=>
{
	let storeAddress = {uId:userId,uAddress:address}
	allUserAddress.push(storeAddress);
	console.log(allUserAddress);
	return allUserAddress;
}

let firstAddress = {
	"streetName":"XYZ Colony,PQR Street",
	"city":"Bangalore",
	"state":"Karnataka",
	"pincode":789456,
	"country":"India"
}

let secondAddress = {
	"streetName":"PQR Colony,ABC Street",
	"city":"Mumbai",
	"state":"Maharashtra",
	"pincode":561245,
	"country":"India"
}

userAddress("sukrit1294",firstAddress,secondAddress);

// 2nd example.........

let invitees=[];
let listOfInvitees = (...people)=>
{
	let invitePeople = people;
	invitees  = invitees.concat(invitePeople);
	console.log(invitees);
	return invitees;
}

listOfInvitees("Abc","Pqr","Xyz");
listOfInvitees("Lmn","Def","Hij");
listOfInvitees("Qwe","Fub");


//SPREAD.............................................

let summesion = (a,b,c)=>
{
	return (a+b+c);

}

let numbers = [5,10,2]
console.log(summesion(...numbers))

//SPREAD concat example.........

let a = [5,12];
let b = ["Abc",56];
let c = [...a,...b];

console.log(c);

//Object Literals----------------------------------------..........................

let firstName = "Sukrit";
let lastName = "Dutta";


let nameOfPerson = {firstName:firstName,lastName:lastName}
let nameOfPerson = {firstName,lastName}//using objects literals
console.log(nameOfPerson);

//2nd Example Object Literals----------------------------------------..........................

let mrp = 1000;
let discountPercent = 10;

let priceOfProduct = {mrp,discountPercent,calculateActualPrice()
	{
		let actualPrice = mrp - ((mrp*discountPercent)/100);
		return actualPrice;
	}
}

console.log(priceOfProduct.calculateActualPrice())


// For in loop---------------------................................................

let customers = [
{
	'cId':'123',
	'cName':'Sukrit'
},
{
	'cId':'456',
	'cName':'Rohan'
}
]

for(let x in customers) 
{	
	console.log(x);
	console.log(customers[x].cId);//dislays both cId
}
//For Of Loop-------------------.......................................
let customers = [
{
	'cId':'123',
	'cName':'Sukrit'
},
{
	'cId':'456',
	'cName':'Rohan'
}
]

for(let x of customers) //displays all objects
{	
	console.log(x)
}