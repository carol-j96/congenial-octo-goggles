let numGrade=90
let letterGrade
switch(true){
    case numGrade>=90 && numGrade<=100:
        letterGrade="A"
        break
    case numGrade>=80 && numGrade<=89:
        letterGrade="B"
        break
    case numGrade>=70 && numGrade<=79:
        letterGrade="C"
        break
    case numGrade>=60 && numGrade<=69:
        letterGrade="D"
        break
    case numGrade>=0 && numGrade<=59:
        letterGrade="F"
        break
    default:
        letterGrade="Invalid grade"
}
console.log(letterGrade)
