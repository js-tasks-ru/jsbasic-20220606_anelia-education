
function getMinMax(str) {
  let obj = { min: Infinity, max: -Infinity }
  let elements = str.split(" ")
  for(let element of elements){
    let numberElement = parseFloat(element)
    if(!Number.isNaN(numberElement)) {
      if(numberElement < obj.min){
        obj.min = numberElement
      } else if(numberElement > obj.max) {
        obj.max = numberElement
      }
    }
  }
  return obj
}
