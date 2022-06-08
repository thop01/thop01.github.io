"use strict";

var computerBeurt;

window.onload = reageerOpLaden;

function reageerOpLaden()
{
	var pen = document.getElementById("canvas").getContext("2d");
	pen.lineWidth = 3;
	pen.strokeStyle = "green";
	pen.fillStyle = "black";

	for(var i = 1; i <= 4; i++ ) 
	{
		toonDobbelsteen(i,0);
	}
	computerBeurt = true;
	beginSpel(true);
}

function reageerOpComputerGooien()
{
	toonMededeling("");
	
	if (computerBeurt)
	{
		var totaalDobbelsteen1 = Math.floor(Math.random() * 6) + 1, totaalDobbelsteen2 = Math.floor(Math.random() * 6) + 1;

		beginSpel(false);

		toonDobbelsteen(1, totaalDobbelsteen1);
		toonDobbelsteen(2, totaalDobbelsteen2);

		toonDobbelsteen(3,0);
		toonDobbelsteen(4,0);
		
		document.getElementById("totaalComputer").value = totaalDobbelsteen1 + totaalDobbelsteen2;

		computerBeurt = !computerBeurt;  //false
	}
	else
	{
		toonMededeling("Spelerbeurt");
	}
}

function reageerOpSpelerGooien()
{
	toonMededeling("");

	switch (true)
	{
		case (!computerBeurt && document.getElementById("inzet").value > 0 && ( document.getElementById("hoger").checked || document.getElementById("lager").checked) ):
			var totaalDobbelsteen3 = Math.floor(Math.random() * 6) + 1, totaalDobbelsteen4 = Math.floor(Math.random() * 6) + 1;

			toonDobbelsteen(3, totaalDobbelsteen3);
			toonDobbelsteen(4, totaalDobbelsteen4);

			document.getElementById("totaalSpeler").value = totaalDobbelsteen3 + totaalDobbelsteen4;
			
			if ( document.getElementById("hoger").checked && (parseFloat(document.getElementById("totaalComputer").value) < parseFloat(document.getElementById("totaalSpeler").value))  ||
				 document.getElementById("lager").checked && (parseFloat(document.getElementById("totaalComputer").value) > parseFloat(document.getElementById("totaalSpeler").value)) )
			{
				document.getElementById("saldo").value = parseFloat(document.getElementById("saldo").value) + parseFloat(document.getElementById("inzet").value);
				toonMededeling("Speler gewonnen");
			}
			else 
			{
				document.getElementById("saldo").value = parseFloat(document.getElementById("saldo").value) - parseFloat(document.getElementById("inzet").value);
				toonMededeling("Computer gewonnen")
			}
			computerBeurt = !computerBeurt;
			break;
		
		case (computerBeurt):
			toonMededeling("Computerbeurt");
			break;
		
		case ( (!document.getElementById("hoger").checked) && (!document.getElementById("lager").checked) ):
			toonMededeling("Geef verwachting");
			break;
			
		case (document.getElementById("inzet").value == 0):
			toonMededeling("Zet in");
			break;
	}	
}

function reageerOpVerwachting()
{
	toonMededeling("");
}

function reageerOpInzetVerhogen()
{
	toonMededeling("");

	if ( parseFloat(document.getElementById("saldo").value) > parseFloat(document.getElementById("inzet").value) )
	{
		document.getElementById("inzet").value = parseFloat(document.getElementById("inzet").value) + 10;
	}
}

function reageerOpInzetVerlagen()
{
	toonMededeling("");

	if ( parseFloat(document.getElementById("inzet").value) > 0 )
	{
		document.getElementById("inzet").value = parseFloat(document.getElementById("inzet").value) - 10;
	}
}

function toonDobbelsteen(dobbelsteenNr, aantalOgen)
{   
	//xCoordinaten zijn 70, 270, 470, 670
	var xCoordinaat = -130 + (100 * (dobbelsteenNr + dobbelsteenNr)), 
	    yCoordinaat = 100, 
	    lengte = 100; 

	var pen = document.getElementById("canvas").getContext("2d");
	pen.clearRect(xCoordinaat + 1, yCoordinaat - 2, lengte - 2, lengte - 2);  //rustiger beeld met +1 en -2
	pen.strokeRect(xCoordinaat, yCoordinaat, lengte, lengte);

	switch(aantalOgen)
	{
		case 1:
			toonOog(2, 2, xCoordinaat, yCoordinaat, lengte);
			break;

		case 2:
			toonOog(1, 1, xCoordinaat, yCoordinaat, lengte);
			toonOog(3, 3, xCoordinaat, yCoordinaat, lengte);
			break;

		case 3:
			toonOog(1, 1, xCoordinaat, yCoordinaat, lengte);
			toonOog(2, 2, xCoordinaat, yCoordinaat, lengte);
			toonOog(3, 3, xCoordinaat, yCoordinaat, lengte);
			break;

		case 4:
			toonOog(1, 1, xCoordinaat, yCoordinaat, lengte);
			toonOog(1, 3, xCoordinaat, yCoordinaat, lengte);
			toonOog(3, 1, xCoordinaat, yCoordinaat, lengte);
			toonOog(3, 3, xCoordinaat, yCoordinaat, lengte);
			break;

		case 5:
			toonOog(1, 1, xCoordinaat, yCoordinaat, lengte);
			toonOog(1, 3, xCoordinaat, yCoordinaat, lengte);
			toonOog(2, 2, xCoordinaat, yCoordinaat, lengte);
			toonOog(3, 1, xCoordinaat, yCoordinaat, lengte);
			toonOog(3, 3, xCoordinaat, yCoordinaat, lengte);
			break;

		case 6:
			toonOog(1, 1, xCoordinaat, yCoordinaat, lengte);
			toonOog(1, 2, xCoordinaat, yCoordinaat, lengte);
			toonOog(1, 3, xCoordinaat, yCoordinaat, lengte);
			toonOog(3, 1, xCoordinaat, yCoordinaat, lengte);
			toonOog(3, 2, xCoordinaat, yCoordinaat, lengte);
			toonOog(3, 3, xCoordinaat, yCoordinaat, lengte);
			break;
	}	
}

function toonOog(xPositie, yPositie, xCoordinaat, yCoordinaat, lengte)
{
	//alert("toonOog xPositie " + xPositie + " yPositie " + yPositie + " xCoordinaat " + xCoordinaat + " yCoordinaat " +  yCoordinaat );
	var straal = 10;
	var pen = document.getElementById("canvas").getContext("2d");
	pen.beginPath();
	pen.arc((xCoordinaat + (xPositie * lengte) / 4), (yCoordinaat + (yPositie * lengte) / 4), straal, 0, 2 * Math.PI);
	pen.fill();
}

function beginSpel(beginSpel)
{
	if (beginSpel)
	{
		document.getElementById("saldo").value = 100;
	}
	document.getElementById("inzet").value = 0;

	document.getElementById("hoger").checked = false;
	document.getElementById("lager").checked = false;

	document.getElementById("totaalComputer").value = "";
	document.getElementById("totaalSpeler").value = "";	
}

function toonMededeling(bericht)
{
	var pen = document.getElementById("canvas").getContext("2d");
	pen.font="20px Arial";
	pen.fillStyle="white";
	pen.fillRect(100,275, 350,50);
	pen.fillStyle="black";
	
	if ( parseFloat(document.getElementById("saldo").value) >= 500 )
	{
		bericht = "Speler wint deze ronde";
		beginSpel(true);
	}
	else if ( parseFloat(document.getElementById("saldo").value) <= 0 )
	{
		bericht = "Computer wint deze ronde";
		beginSpel(true);
	}
	pen.fillText(bericht,175,300);
}
