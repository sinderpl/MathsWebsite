var $ = function(id)
{
	return document.getElementById(id);
}
var ResetFieldsDistance = function()
{
	
	$("distance").value ="";
	$("distance1").value ="";
	$("distance2").value ="";
	$("DistanceAnswer").value ="";
}
var ResetFieldsMass = function()
{
	$("Mass1").value = "";
	$("MassUnit1").value ="";
	$("MassUnit2").value ="";
	$("MassAnswer").value ="";
}
var ResetFieldsSpeed1 = function ()
{
	$("speed").value = "";
	$("speed1").value = "";
	$("speed2").value ="";
	$("SpeedAnswer").value ="";
}
var DoCalculateMass = function()
{
	var mass1 = parseFloat($("Mass1").value);
	var MassUnit1 = $("MassUnit1").value;
	var MassUnit2 = $("MassUnit2").value;
	var MassResult = 0.0;
	var dp = $("DP").value;
	
	// choosing decimal places
	if(dp==("ODP"))
		dp=1;
	else if(dp==("TDP"))
		dp=2;
	else if(dp==("THDP"))
		dp=3;
	else if(dp==("FDP"))
		dp=4;
	else if(dp==("FIDP"))
		dp=5;
	else if(dp==("SDP"))
		dp=6;
	else if(dp==("SEDP"))
		dp=7;
	else if(dp==("EDP"))
		dp=8;
	else if(dp==("NDP"))
		dp=9;
	else if(dp==("TEDP"))
		dp=10;
		
		
										//Mass Conversion
	if (isNaN(mass1))
		{
			alert ("Please enter a number");
		}
	else
	{
		//Conversion from grams to MassUNit2
		if ( MassUnit1 == ("G1" ) && MassUnit2 == ("G2") ) 
		{
			alert("Please enter two different units");
		}
		else if ( MassUnit1 == ("G1" ) && MassUnit2 == ("KG2") )
		{
			MassResult = mass1/1000;
		}
		else if ( MassUnit1 == ("G1" ) && MassUnit2 == ("T2") )
		{
			MassResult = mass1/1000000;
		}
		else if ( MassUnit1 == ("G1" ) && MassUnit2 == ("OZ2") )
		{
			MassResult = mass1/28.3495;
		}
		else if ( MassUnit1 == ("G1" ) && MassUnit2 == ("P2") )
		{
			MassResult = mass1/453.5924;
		}
		else if ( MassUnit1 == ("G1" ) && MassUnit2 == ("ST2") )
		{
			MassResult = mass1*0.000157473;
		}
		
		//Kg conversion
		else if ( MassUnit1 == ("KG1" ) && MassUnit2 == ("KG2") ) 
		{
			alert("Please enter two different units");
		}
		else if ( MassUnit1 == ("KG1" ) && MassUnit2 == ("G2") ) 
		{
			MassResult = mass1*1000;
		}
		else if ( MassUnit1 == ("KG1" ) && MassUnit2 == ("T2") ) 
		{
			MassResult = mass1/1000;
		}
		else if ( MassUnit1 == ("KG1" ) && MassUnit2 == ("OZ2") ) 
		{
			MassResult = mass1*35.274;
		}
		else if ( MassUnit1 == ("KG1" ) && MassUnit2 == ("P2") ) 
		{
			MassResult = mass1*2.20462;
		}
		else if ( MassUnit1 == ("KG1" ) && MassUnit2 == ("ST2") ) 
		{
			MassResult = mass1*0.157473;
		}
		
		//tonne
		else if ( MassUnit1 == ("T1" ) && MassUnit2 == ("T2") ) 
		{
			alert("Please enter two different units");
		}
		else if ( MassUnit1 == ("T1" ) && MassUnit2 == ("G2") ) 
		{
			MassResult = mass1*1000000;
		}
		else if ( MassUnit1 == ("T1" ) && MassUnit2 == ("KG2") ) 
		{
			MassResult = mass1*1000;
		}
		else if ( MassUnit1 == ("T1" ) && MassUnit2 == ("OZ2") ) 
		{
			MassResult = mass1*35274;
		}
		else if ( MassUnit1 == ("T1" ) && MassUnit2 == ("P2") ) 
		{
			MassResult = mass1*2204.62;
		}
		else if ( MassUnit1 == ("T1" ) && MassUnit2 == ("ST2") ) 
		{
			MassResult = mass1*157.473;
		}
		
		// ounces
		else if ( MassUnit1 == ("OZ1" ) && MassUnit2 == ("OZ2") ) 
		{
			alert("Please enter two different units");
		}
		else if ( MassUnit1 == ("OZ1" ) && MassUnit2 == ("G2") ) 
		{
			MassResult = mass1*28.3495;
		}
		else if ( MassUnit1 == ("OZ1" ) && MassUnit2 == ("KG2") ) 
		{
			MassResult = mass1*0.0283495;
		}
		else if ( MassUnit1 == ("OZ1" ) && MassUnit2 == ("T2") ) 
		{
			MassResult = mass1*0.00003110348013;
		}
		else if ( MassUnit1 == ("OZ1" ) && MassUnit2 == ("P2") ) 
		{
			MassResult = mass1*0.0625;
		}
		else if ( MassUnit1 == ("OZ1" ) && MassUnit2 == ("ST2") ) 
		{
			MassResult = mass1*0.00446429;
		}
		
		//pounds
		else if ( MassUnit1 == ("P1" ) && MassUnit2 == ("P2") ) 
		{
			alert("Please enter two different units");
		}
		else if ( MassUnit1 == ("P1" ) && MassUnit2 == ("G2") ) 
		{
			MassResult = mass1*453.592;
		}
		else if ( MassUnit1 == ("P1" ) && MassUnit2 == ("KG2") ) 
		{
			MassResult = mass1*0.453592;
		}
		else if ( MassUnit1 == ("P1" ) && MassUnit2 == ("T2") ) 
		{
			MassResult = mass1*0.000453592;
		}
		else if ( MassUnit1 == ("P1" ) && MassUnit2 == ("OZ2") ) 
		{
			MassResult = mass1*16;
		}
		else if ( MassUnit1 == ("P1" ) && MassUnit2 == ("ST2") ) 
		{
			MassResult = mass1*0.0714286;
		}
		
		//stone
		else if ( MassUnit1 == ("ST1" ) && MassUnit2 == ("ST2") ) 
		{
			alert("Please enter two different units");
		}
		else if ( MassUnit1 == ("ST1" ) && MassUnit2 == ("G2") ) 
		{
			MassResult = mass1*6350.29;
		}
		else if ( MassUnit1 == ("ST1" ) && MassUnit2 == ("KG2") ) 
		{
			MassResult = mass1*6.35029;
		}
		else if ( MassUnit1 == ("ST1" ) && MassUnit2 == ("T2") ) 
		{
			MassResult = mass1*0.00635029;
		}
		else if ( MassUnit1 == ("ST1" ) && MassUnit2 == ("P2") ) 
		{
			MassResult = mass1*14;
		}
		else if ( MassUnit1 == ("ST1" ) && MassUnit2 == ("OZ2") ) 
		{
			MassResult = mass1*224;
		}
	}
	$("MassAnswer").value = MassResult.toFixed(dp);
}


var DoCalculateDistance = function()
{
	
	var distance = parseFloat($("distance").value);
	var DistanceUnit1 = $("distance1").value;
	var DistanceUnit2 = $("distance2").value;
	var DistanceResult = 0.0;
	var dp = $("DP").value;
	
	// choosing decimal places
	if(dp==("ODP"))
		dp=1;
	else if(dp==("TDP"))
		dp=2;
	else if(dp==("THDP"))
		dp=3;
	else if(dp==("FDP"))
		dp=4;
	else if(dp==("FIDP"))
		dp=5;
	else if(dp==("SDP"))
		dp=6;
	else if(dp==("SEDP"))
		dp=7;
	else if(dp==("EDP"))
		dp=8;
	else if(dp==("NDP"))
		dp=9;
	else if(dp==("TEDP"))
		dp=10;
										//Distance Conversion
		
	if (isNaN(distance))
	{
		alert ("Please enter a number");
	}
	else
	{
		//Centimetres
		if ( DistanceUnit1 == ("C1" ) && DistanceUnit2 == ("C2") ) 
		{
			alert("Please enter two different units");
		}
		else if ( DistanceUnit1 == ("C1" ) && DistanceUnit2 == ("ME2") ) 
		{
			DistanceResult = distance*0.01;
		}
		else if ( DistanceUnit1 == ("C1" ) && DistanceUnit2 == ("KM2") ) 
		{
			DistanceResult = distance/100000;
		}
		else if ( DistanceUnit1 == ("C1" ) && DistanceUnit2 == ("IN2") ) 
		{
			DistanceResult = distance*0.393701;
		}
		else if ( DistanceUnit1 == ("C1" ) && DistanceUnit2 == ("FT2") ) 
		{
			DistanceResult = distance*0.0328084;
		}
		else if ( DistanceUnit1 == ("C1" ) && DistanceUnit2 == ("MI2") ) 
		{
			DistanceResult = distance/160934.4;
		}
		
		//Metres
		else if ( DistanceUnit1 == ("M1" ) && DistanceUnit2 == ("M2") ) 
		{
			alert("Please enter two different units");
		}
		else if ( DistanceUnit1 == ("M1" ) && DistanceUnit2 == ("CM2") ) 
		{
			DistanceResult = distance*100;
		}
		else if ( DistanceUnit1 == ("M1" ) && DistanceUnit2 == ("KM2") ) 
		{
			DistanceResult = distance*0.001;
		}
		else if ( DistanceUnit1 == ("M1" ) && DistanceUnit2 == ("IN2") ) 
		{
			DistanceResult = distance*39.3701;
		}
		else if ( MassUnit1 == ("M1" ) && DistanceUnit2 == ("FT2") ) 
		{
			DistanceResult = distance*3.28084;
		}
		else if ( DistanceUnit1 == ("M1" ) && DistanceUnit2 == ("MI2") ) 
		{
			DistanceResult = distance*0.000621371;
		}
		
		
		//Kilometres
		else if ( DistanceUnit1 == ("KM1" ) && DistanceUnit2 == ("KM2") ) 
		{
			alert("Please enter two different units");
		}
		else if ( DistanceUnit1 == ("KM1" ) && DistanceUnit2 == ("CM2") ) 
		{
			DistanceResult = distance*100000;
		}
		else if ( DistanceUnit1 == ("KM1" ) && DistanceUnit2 == ("ME2") ) 
		{
			DistanceResult = distance*1000;
		}
		else if ( DistanceUnit1 == ("KM1" ) && DistanceUnit2 == ("IN2") ) 
		{
			DistanceResult = distance*39370.1;
		}
		else if ( DistanceUnit1 == ("KM1" ) && DistanceUnit2 == ("FT2") ) 
		{
			DistanceResult = distance*3280.84;
		}
		else if ( DistanceUnit1 == ("KM1" ) && DistanceUnit2 == ("MI2") ) 
		{
			DistanceResult = distance*0.621371;
		}
		
		
		//Inches
		else if ( DistanceUnit1 == ("IN1" ) && DistanceUnit2 == ("IN2") ) 
		{
			alert("Please enter two different units");
		}
		else if ( DistanceUnit1 == ("IN1" ) && DistanceUnit2 == ("CM2") ) 
		{
			DistanceResult = distance*2.54;
		}
		else if ( DistanceUnit1 == ("IN1" ) && DistanceUnit2 == ("ME2") ) 
		{
			DistanceResult = distance*0.0254;
		}
		else if ( DistanceUnit1 == ("IN1" ) && DistanceUnit2 == ("KM2") ) 
		{
			DistanceResult = distance*0.0000254;
		}
		else if ( DistanceUnit1 == ("IN1" ) && DistanceUnit2 == ("FT2") ) 
		{
			DistanceResult = distance*0.0833333;
		}
		else if ( DistanceUnit1 == ("IN1" ) && DistanceUnit2 == ("MI2") ) 
		{
			DistanceResult = distance*0.0000157828283;
		}
		
		
		//Foot
		else if ( DistanceUnit1 == ("FT1" ) && DistanceUnit2 == ("FT2") ) 
		{
			alert("Please enter two different units");
		}
		else if ( DistanceUnit1 == ("FT1" ) && DistanceUnit2 == ("CM2") ) 
		{
			DistanceResult = distance*30.48;
		}
		else if ( DistanceUnit1 == ("FT1" ) && DistanceUnit2 == ("ME2") ) 
		{
			DistanceResult = distance*0.3048;
		}
		else if ( DistanceUnit1 == ("FT1" ) && DistanceUnit2 == ("KM2") ) 
		{
			DistanceResult = distance*0.0003048;
		}
		else if ( DistanceUnit1 == ("FT1" ) && DistanceUnit2 == ("In2") ) 
		{
			DistanceResult = distance*12;
		}
		else if ( DistanceUnit1 == ("FT1" ) && DistanceUnit2 == ("MI2") ) 
		{
			DistanceResult = distance*0.000189394;
		}
		
		
		//Mile
		else if ( DistanceUnit1 == ("MI1" ) && DistanceUnit2 == ("MI2") ) 
		{
			alert("Please enter two different units");
		}
		else if ( DistanceUnit1 == ("MI1" ) && DistanceUnit2 == ("CM2") ) 
		{
			DistanceResult = distance*160934;
		}
		else if ( DistanceUnit1 == ("MI1" ) && DistanceUnit2 == ("ME2") ) 
		{
			DistanceResult = distance*1609.34;
		}
		else if ( DistanceUnit1 == ("MI1" ) && DistanceUnit2 == ("KM2") ) 
		{
			DistanceResult = distance*1.60934;
		}
		else if ( DistanceUnit1 == ("MI1" ) && DistanceUnit2 == ("IN2") ) 
		{
			DistanceResult = distance*63360;
		}
		else if ( DistanceUnit1 == ("MI1" ) && DistanceUnit2 == ("FT2") ) 
		{
			DistanceResult = distance*5280;
		}
	}
	$("DistanceAnswer").value = DistanceResult.toFixed(dp);
}
var DoCalculateSpeed1 = function()
{
	var speed = $("speed").value;
	var SpeedUnit1 = $("speed1").value;
	var SpeedUnit2 = $("speed2").value;
	var SpeedResult = 0.0;
	
	if ( isNaN(speed))
	{
		alert("Please enter a numerical value")
	}
	else
	{
		if ( SpeedUnit1 == ("KMPH1" ) && SpeedUnit2 == ("KMPH2") ) 
		{
			alert("Please enter two different units");
		}
		else if (SpeedUnit1 == ("KMPH1" ) && SpeedUnit2 == ("MPH2") )
		{
			SpeedResult = speed*0.621371 ;
		}
		else if (SpeedUnit1 == ("MPH1" ) && SpeedUnit2 == ("MPH2") ) 
		{
			alert("Please enter two different units");
		}
		else if (SpeedUnit1 == ("MPH1" ) && SpeedUnit2 == ("KMPH2") )
		{
			SpeedResult = speed*1.60934 ;
		}
	}
	$("SpeedAnswer").value = SpeedResult.toFixed(2);
}	
window.onload = function()
{
	$("CalculateMass").onclick = function () {DoCalculateMass ();}
	$("ResetMass").onclick = function () {ResetFieldsMass ();}
	$("CalculateDistance").onclick = function () {DoCalculateDistance ();}
	$("ResetDistance").onclick = function () {ResetFieldsDistance ();}
	$("CalculateSpeed1").onclick = function () {DoCalculateSpeed1 ();}
	$("ResetSpeed1").onclick = function () {ResetFieldsSpeed1 ();}
}
