// Vezba 1

var niz = [7,4,52,10,4,5,12,1,3,6];
var a = 4;
var b = 25;


(function zameniBroj () 
{
	for (var i=0; i <niz.length; i++) 
	{
		if (niz[i] == a) 
		{
		 niz[i] = b;
		}
	}
	return niz;
	document.write(niz);
})()


// Vezba 2
var niz = [3,6,7,8]; //false
var niz = [1,3,1,5]; //true

function provera (niz) 
{
	for (var i=0;i<niz.length;i++)
	{
		for (var l=i+1; l<niz.length; l++) 
		{
			if (niz[i] == niz[l])
	      {
	      	var x = true;
	      	document.write(x);
	        break;
	      }
	     
		}      
	}
	if (x!=true) 
	{
		x = false;
		document.write(x);
	}
}


//Vezba 3

var weight1;
var weight2;
var maxWeight;

var weight1 = 20;
var weight2 = 30;
var maxWeight = 60;

function tezinaZaPoneti () 
{
	
    if (weight1>=maxWeight&&weight2>=maxWeight)
	{
		return('Ne nosimo nijedan');
	}
	else if (weight1>=maxWeight&&weight2<=maxWeight)
	{
		return('Nosimo drugi');
	}
	else if (weight1<=maxWeight&&weight2>=maxWeight)
	{
		return('Nosimo prvi');
	}
	else if (weight1<=maxWeight&&weight2<=maxWeight&&weight1+weight2>=maxWeight)
	{
		return('Biramo koji cemo da nosimo');
	}
	else (weight1+weight2<=maxWeight)
	{
		return('Nosimo oba');
	}
} 
document.write(tezinaZaPoneti (20,30,60));

//Vezba 4
// Napraviti one page temlate