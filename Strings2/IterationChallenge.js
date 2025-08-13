function reverseVowels(string){
    const vowels="aeiouAEIOU"
    let chars=string.split("")
    let vowelChars=chars.filter(ch=>vowels.includes(ch))
    vowelChars.reverse()
    let result=chars.map(ch=>{
        if (vowels.includes(ch)){
            return vowelChars.shift()
        }
        return ch
    })
    return result.join("")
}
console.log(reverseVowels('programming'))
console.log(reverseVowels('AeIoU'))
