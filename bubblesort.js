function bubbleSort(array) {

  let solution = array

  if (array.length ===0 || array.length ===1){
    return array  
  }
  for(let i =0 ; i< solution.length; i++){
    for(let j=0; j <solution.length -i; j++){


    //if a swap needs to happen
    if (solution[j]> solution[j+1]) { 
      swap()
      let biggerValue = solution[j]
      solution[j] = solution[j+1]
      solution[j+1] = biggerValue
    }
    console.log(solution, i)
  }
  }
  return solution
}

function swap(){
  return 
}


