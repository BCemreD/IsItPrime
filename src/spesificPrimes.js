for(let nmr = 2; nmr < 1000; nmr++)
{
  for (let partition = 2; partition < nmr; partition++)
    {
      if(nmr % partition === 0)
          break;
    }
	if (nmr === partition)
		console.log(nmr);
  
}