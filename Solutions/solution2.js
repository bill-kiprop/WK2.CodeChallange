function findProgression(start, end) {// Determines the progression for generating the range
    
    if (start <= end) {// If start is less than or equal to end, the progression is positive
        return 1
    } else { // otherwise the progression is to the negative
        return -1
    }
}

function generateRange(start, end) { //generates an array of numbers from start to end
    const range = []
    
    const progression = findProgression(start, end)
  
    
    for (let i = start; i <= end; i += progression) { // Iterate through the range using the loop
        
        range.push(i);// Adds each value of i to the range array
    }
  
    // Return the generated range array
    return range
}

console.log(generateRange(4, 7)) //[ 4, 5, 6, 7 ]
console.log(generateRange(-4, 7))//[ -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7 ]
