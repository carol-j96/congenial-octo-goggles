let n1 = parseInt(inp[0]) 
let n2 = parseInt(inp[1])
let op = inp[2] 
let result = 0
if (op==='+'){
    result=n1+n2
}else if (op==='-'){
    result=n1-n2
}else if (op==='*'){
    result=n1*n2
}else if (op==='/'){
    result=n1/n2
}
n1=9
n2=3
console.log(result)
