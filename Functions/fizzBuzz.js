console.log("Welcome to FizzBuzz!")
const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter a number: ", function(int){
    int=parseInt(int)

    let fizzbuzz=(int)=>{
        if (int%3===0 && int%7===0){
            return "FizzBuzz"
        }else if(int%3===0){
            return "Fizz"
        }else if (int%7===0){
            return "Buzz"
        }else if(int.toString().includes('3')){
            return "Almost Fizz"
        }else{
            return String(int)
        }
    }

    for(let i=1;i<=int;i++){
        console.log(fizzbuzz(i))
    }

    rl.close()
})