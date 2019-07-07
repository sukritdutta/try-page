
/*let facto = function findFactorial(x)
{
	let fact = 1;
	if(x<0)
		fact = null;
	else if(x==1||x==0)
		fact = 1;
	else
	{
		//for(let i=x;i>=1;i--)
		//	fact = fact*i;
	
		for(let i=1;i<=x;i++)
			fact = fact*i;
	}
	return fact;
};

console.log(facto(-1));*/



/*let removeVowelsAndSpaces = function(givenString){

   // start your code here.
    newString="";
    replaced = givenString.replace(" ","");
	console.log(replaced+"\n");
    length = replaced.length;
	console.log(length+"\n");
    for(var i = 0;i<length;i++)
    {
        if (replaced[i]==="a"||replaced[i]==="e"||replaced[i]==="i"||replaced[i]==="o"||replaced[i]==="u")
        {
			console.log("Vowel: "+replaced[i]+"\n");
			console.log("Vowel: "+replaced.replace(replaced[i],"-")+"\n");
			
        }
        else
            newString = newString + replaced[i];
    }
	console.log(newString);
};

removeVowelsAndSpaces("bad dus");*/

/*let calculateAge = function(day, month, year) {
  // start your code here.
    dt = new Date(year,month,day);
    diff = Date.now()-dt.getTime();
    age_diff = new Date(diff);
    
     return Math.abs(age_diff.getUTCFullYear() - 1970);
	 console.log(age_diff.getUTCFullYear);

};

calculateAge(12,12,1969);
console.log(calculateAge(12,12,1969));*/


/*let removeVowelsAndSpaces = function(givenString){
   // start your code here.
    
    let result="";
	let finalResult="";
	let regex = /^[aeiouAEIOU ]+$/;
    let len = givenString.length;
    
    for (i=0;i<len;i++)
    {
        let c = givenString[i];
        if(givenString[i].match(regex)===null)
        {
            result = result+c;
			console.log(result);
        }
    }
    
	return result;
	console.log(result);
    
};

removeVowelsAndSpaces("samsung sukrit");*/

let findPrime = function prime(n)
{
	if(n===1)
		return false;
	else if(n===2)
		return true;
	else
	{
		for(let i=2;i<n;i++)
		{
			if(n%i===0)
			{
				return false;
			}
		}
		return true;
	}
}

console.log(findPrime(5))



