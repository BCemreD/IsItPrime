const findDivisors = number => {
    const divisors = [1];
    for (let i = 2; i < number - 1; ++i) if (number % i === 0) divisors.push(i);
    return divisors;
  };
  const sum = (...numbers) => numbers.reduce((a, b) => a + b);
  
  const areFriendlyNumbers = (number, number2) =>
    sum(...findDivisors(number)) === number2 && sum(...findDivisors(number2)) === number;
  
  const checkFriendlyNumbers = (number, number2) =>
    areFriendlyNumbers(number, number2)
      ? alert(`${number} and ${number2} are friendly numbers.💚`)
      : alert(`${number} and ${number2} are not friendly numbers.❌`);
  
  let sayi =prompt("Enter the first number:") 
  sayi = parseInt(sayi)
  let sayi2 =prompt("Enter the second number:")
  sayi2 = parseInt(sayi2)
  checkFriendlyNumbers(sayi, sayi2);