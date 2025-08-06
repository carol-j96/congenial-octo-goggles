function findElement(array,element){
    array.includes(element)
    if (array.includes(element)==true){
        return array.indexOf(element)
    }else{
        return -1
    }
}
console.log(findElement([1,2,3,4,5],4))
console.log(findElement([1,2,3,4,5], 6))
