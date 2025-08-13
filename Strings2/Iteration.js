function countUniqueVowels(string){
    let count=0
    const vowels="aeiouAEIOU"
    for(const char of string){
        if (vowels.includes(char)){
            count++
        }
    }
    return count
}
console.log(countUniqueVowels('I am studying JavaScript'))
