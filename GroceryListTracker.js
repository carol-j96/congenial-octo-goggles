let grocery=[]
const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

function addItem(item){
    item=String(item).trim()
    grocery.push(item)
    console.log(`${item} added to the grocery list.`)
}

function removeItem(item){
    item=String(item).trim()
    const index=grocery.indexOf(item)
    if (index!==-1){
        grocery.splice(index,1)
        console.log(`${item} removed from the grocery list.`)
    }else{
        console.log(`${item} is not in the grocery list.`)
    }
}

function viewList(){
    if (grocery.length===0){
        console.log("The grocery list is empty")
    }else{
        console.log("Grocery List: ")
        grocery.forEach((it,i)=>{
            console.log(`${i+1}. ${it}`)
        })
    }
}

rl.question("Enter an item: ", function (item){
    addItem(item)

    rl.question("Enter an item to remove: ", function(itemToRemove){
        removeItem(itemToRemove)
        console.log()
        viewList()

        rl.close()
    })
})
