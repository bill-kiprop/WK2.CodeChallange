function pNumbers(numbers) {
    
    function isPrime(numbr) {
      if (numbr < 2) return false;// If the number is less than 2, it's not prime
      if (numbr === 2) return true// 2 is a prime number
      if (numbr % 2 === 0) return false;//a multiple of 2 is not a prime number
      
      const squareRoot = Math.sqrt(numbr);//calculates the square root of the number
      for (let i = 3;i <= squareRoot;i++){//loops between three and the square root of the number
        if (numbr % i === 0) return false;
      }
      
      return true;//provides the prime numbers
    }
  

    return numbers.filter(isPrime);//filters out the numbers so as to remain with only prime numbers
  }

  

  console.log(pNumbers([1,2,3,4,5,6,7,8,9]))//[ 2, 3, 5, 7 ]
