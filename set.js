var x=prompt("Enter your year of birth");
var y=prompt("Enter your month of birth");
var z=prompt("Enter your date of birth");

document.write("Age calculation-----"+"<br>");


y=y-1;

var today1=new Date(x,y,z);
document.write("Your birthday is "+today1+"<br>");


var year1=today1.getFullYear();

//console.log(year1);



var today2=new Date();
//console.log(today2);

var year2=today2.getFullYear();

//console.log(year2);

var month2=today2.getMonth();

//console.log(month2);
month2=month2-1;






var age=year2-year1;
if(y<=month2){
	document.write("Your age is:"+age);
}

else{document.write("Your age is:"+(age-1))}
