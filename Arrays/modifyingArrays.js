let myArray=[1, 2, 3, 4, 5, 6]
function changeElement(array, index, newElement){
    if (index>=0 && index<array.length){
        array[index]=newElement
    }else{
        console.log("Index is out of bounds")
    }
    return array 
}
console.log(changeElement(myArray,0,9))

