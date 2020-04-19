var c=0;
let origboard=[0,1,2,3,4,5,6,7,8];
let triplets=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let check=[0,0,0,0,0,0,0,0,0];
let store1=[];
let store2=[];
// var cells = document.querySelectorAll('.cell');
/*function singleplayer()*/
/*{
	console.log(1);
	document.querySelector("a").style.display="none";
	document.querySelector("b").style.display="none";
	document.querySelector("c").style.display="none";
	document.querySelector("d").style.display="none";
	document.querySelector("cell").style.display="block";
	document.querySelector("button").style.display="none";
	document.querySelector("e").style.display="block";
}*/

function singleplayer()
{
	var cells = document.querySelectorAll('.cell');
	for(let i=0;i<cells.length;i++)
		cells[i].addEventListener("click",put);

	document.querySelector(".a").style.display="none";
	document.querySelector(".b").style.display="none";
	document.querySelector(".c").style.display="none";
	document.querySelector(".d").style.display="none";
	document.querySelector(".cell").style.display="block";
	document.querySelector(".button2").style.display="none";
	document.querySelector(".e").style.display="block";
}

function check1()
{
	for(var i=0;i<8;i++)
	{
		for(var j=0;j<store1.length;j++)
		{
			for(var k=j+1;k<store1.length;k++)
			{
				for(var l=k+1;l<store1.length;l++)  
				{
					if(triplets[i][0]===store1[j]&&triplets[i][1]===store1[k]&&triplets[i][2]===store1[l])
						{
							document.getElementById("demo").innerHTML="X won";
							document.getElementById(store1[j].toString()).style.backgroundColor = "lightblue";
							document.getElementById(store1[k].toString()).style.backgroundColor = "lightblue";
							document.getElementById(store1[l].toString()).style.backgroundColor = "lightblue";

							var cells = document.querySelectorAll('.cell');
							for(let i=0;i<cells.length;i++)
								cells[i].removeEventListener("click",put);
						}
				}
			}
		}
	}
	for(var i=0;i<8;i++)
	{
		for(var j=0;j<store2.length;j++)
		{
			for(var k=j+1;k<store2.length;k++)
			{
				for(var l=k+1;l<store2.length;l++)
				{
					if(triplets[i][0]===store2[j]&&triplets[i][1]===store2[k]&&triplets[i][2]===store2[l])
						{document.getElementById("demo").innerHTML="O won";
					document.getElementById(store1[j].toString()).style.backgroundColor = "lightblue";
							document.getElementById(store1[k].toString()).style.backgroundColor = "lightblue";
							document.getElementById(store1[l].toString()).style.backgroundColor = "lightblue";
				}

				}
			}
		}
	}
}

var z1=0,z2=0;
function put(x){
	var id=x.target.id;
	console.log(id);
	if(!check[parseInt(id)])
	{if(c%2==0)
		{document.getElementById(id).innerHTML="X";store1[z1]=parseInt(id);z1++;}
	else
		{document.getElementById(id).innerHTML="O";store2[z2]=parseInt(id);z2++;}
	c++;
	check[parseInt(id)]=1;
	store1.sort();
	store2.sort();
	check1();
}
}
