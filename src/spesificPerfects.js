 let nmbr=1;
for (let nmbr=1; nmbr<=1000; nmbr++)
{
    let sum = 0;
    for (let i = 1 ; i < nmbr ; i++) 
    {
      if(nmbr %i == 0)  
        sum += i;
    }

    if (sum== nmbr) 
      console.log( nmbr+ " is a perfect number between 1 and 1000");
	
}