function filterRange(arr, a, b) {
  let filteredArray = [];
  for (let number of arr){
    if(a <= number && number <= b){
      filteredArray.push(number);
    }
  }
  return filteredArray;
}
