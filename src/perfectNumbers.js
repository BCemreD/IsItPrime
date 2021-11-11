
let sayi=prompt("Check if perfect");
let v=sayi;
let count=0;
for(let i=1; i<sayi; i++)
{
if(sayi%i==0)
{
	count=count+i;
}
}
if(count==v)
{
alert("the number is perfect");
}
else
{
alert("the number is not a perfect");
}
