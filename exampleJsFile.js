function main()
{
    if(Selection=="add")
    {
        addValues();
    }
    if(Selection=="sub")
    {
        subValues();
    }
}
function addValues()
{
    var a=document.getElementById("textA").value;
    var b=document.getElementById("textB").value;

    var x = parseInt(a);
    
var y = parseInt(b);

    
z = x+y;
    
    
document.getElementById("output").innerHTML = x + y;
    
    
console.log(x+y);
}


function checkInteger(element)
{

    

    
const el = element.value; //const let var 
    
    
}
if(isNaN(el))
{ //a is not a number --> 
       
 //alert("Please enter a number alone");
       
 document.getElementById("error").innerHTML = "Please enter a number alone";
     
 document.getElementById("error").classList.add("error");
   
 }
else
 {
      
  document.getElementById("error").innerHTML = "";
       
  document.getElementById("error").classList.remove("error");
   
 }
