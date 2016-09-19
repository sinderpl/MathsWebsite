var $ = function(id){
	return document.getElementById(id);
}

var ResetFieldsInteger = function()
{
	$("value1").value = "";
	$("value2").value = "";
	$("result").value = "";
	$("min").value ="";
	$("max").value ="";
	$("DP").value ="";
}
var ResetFieldsAbsolute = function()
{
	$("AbsDiff1").value = "";
	$("AbsDiff2").value = "";
	$("AbsDiffResult").value = "";
}
var ResetFieldsFactorial = function()
{
	$("factorial").value = "";
	$("factorialAnswer").value = "";
}
var DoCalculateInteger = function()
{
	var value1 = parseFloat($("value1").value);
	var value2 = parseFloat($("value2").value);
	var result = 0;
	var min = 0;
	var max = 0;
	var dp = $("DP").value; 
	
	// sets the decimal place
	if(dp==("ODP"))
		dp=1;
	else if(dp==("TDP"))
		dp=2;
	else if(dp==("THDP"))
		dp=3;
	else
		dp=4;
	
	// choice of functions
	if(isNaN(value1) || isNaN(value2)) 
	{
		alert("Enter a number");
	}
	else
	{
		if($("add").checked==true)
			result = value1+value2;
		if($("subtract").checked==true)
			result = value1-value2;		
		if($("multiply").checked==true)
			result = value1*value2;	
		if($("divide").checked==true)
			result = value1/value2;	
	}
	
	// chooses min and max for 2 values
	if (value1<value2) 
	{
		min = value1;
		max  = value2;
	}
	else
	{
		min  = value2;
		max  = value1;
	}
	
	$("min").value = min.toFixed(2);
	$("max").value = max.toFixed(2);
	$("result").value = result.toFixed(dp);
}

var DoCalculateAbsolute = function()
{
	var AbsDiff1 = parseFloat($("AbsDiff1").value);
	var AbsDiff2 = parseFloat($("AbsDiff2").value);
	var AbsDiffResult = 0.0;
	var dp = $("DP").value; 
	
	//Absolute Difference
	if (isNaN(AbsDiff1) || isNaN(AbsDiff2))
	{
		alert("Enter a number");
	}
	else if (ABsDiff1 > AbsDiff2)
	{
		AbsDiffResult = AbsDiff1-AbsDiff2;
	}
	else
	{
		AbsDiffResult = AbsDiff2-AbsDiff1;
	}
	// sets the decimal place
	if(dp==("ODP"))
		dp=1;
	else if(dp==("TDP"))
		dp=2;
	else if(dp==("THDP"))
		dp=3;
	else
		dp=4;
	$("AbsDiffResult").value = AbsDiffResult.toFixed(2);
}

var DoCalculateFactorial = function()
{
	var factorialAnswer = parseInt($("factorial").value);
	var factorial = parseInt($("factorial").value);
	var dp = $("DP").value; 
	
	
	// sets the decimal place
	if(dp==("ODP"))
		dp=1;
	else if(dp==("TDP"))
		dp=2;
	else if(dp==("THDP"))
		dp=3;
	else
		dp=4;
		
	// calculates the factorial
	if(isNaN(factorial)) 
		{
			alert("Enter a number");
		}
	else 
	{
		if ( factorial < 1 || factorial > 20 )
		{
			alert ("Please enter a number between 1 and 20");
		}
		else
		{
			for (var x = factorial-1; x>1 ; x-- )
			{
				factorialAnswer = factorialAnswer*x;
			}
		}		
	}
	$("factorialAnswer").value = factorialAnswer.toFixed(2);
}


window.onload = function()
{
	$("calculateInteger").onclick = function () {DoCalculateInteger ();}
	$("resetInteger").onclick = function () {ResetFieldsInteger ();}
	$("calculateAbsolute").onclick = function () {DoCalculateAbsolute ();}
	$("resetAbsolute").onclick = function () {ResetFieldsAbsolute ();}
	$("calculateFactorial").onclick = function () {DoCalculateFactorial ();}
	$("resetFactorial").onclick = function () {ResetFieldsFactorial ();}
}