// function for multiplication...........................................

function multiply(a,b)
{
	return a*b;
}

var product = multiply(5,5)
alert(product)

//function to generate message.............................................

function generateMessage(name,message)
{
	var createMessage="Hi"+" "+name+"\n"+"We have a message for you :"+" "+message;
	return createMessage;
}
var num=window.prompt("enter number of persons you want to send email");
for(var i=1;i<=num;i++)
{
var name=window.prompt("Enter name for the person"+" " +i+" "+"you want to send" );
var message=window.prompt("Enter your message for person"+" "+i+" "+"you want to send");
var sendEmail = generateMessage(name,message);
alert(sendEmail);
}

//simple login function......................................................

users=[
{
	"userName":"sukritdutta@yahoo.com",
	"passwords":"password1",
	"firstName":"Sukrit",
	"lastName":"Dutta",
	"contact":1234567890,
	"subscription":true
},
{
	"userName":"rohankumar@yahoo.com",
	"passwords":"password2",
	"firstName":"Rohan",
	"lastName":"Kumar",
	"contact":9876543210,
	"subscription":true
},
{
	"userName":"arjunroy@yahoo.com",
	"passwords":"password1",
	"firstName":"Arjun",
	"lastName":"Roy",
	"contact":1234512345,
	"subscription":false
}
]


function loginCheck(userName,passwords,allUsers)
{
	var chkUserName=false;
	var chkPassword=false;
	
	
	for(currentUser in allUsers)
	{
		console.log(allUsers[currentUser]);
		if(allUsers[currentUser]['userName']==userName)
		{
			if(allUsers[currentUser]['passwords']==passwords)
			{
				chkUserName=true;
				chkPassword=true;
				break;
			}
			else
			{
			chkUserName=true;
			chkPassword=false;
			break;
			}
		}
		else
		chkUserName=false;
	}
	
	if(chkUserName==true && chkPassword==true)
	{
		alert("login Successful");
	}
	else if(chkUserName==true && chkPassword==false)
	alert("wrong password");
	else
	{
		alert("no user found");
	}
}

uname=prompt("Enter username");
upass=prompt("Enter password");
loginCheck(uname,upass,users);