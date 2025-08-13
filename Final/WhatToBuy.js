const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
function analyzeBudget(prices,items,budgetPerItem){
    let affordableItems=[]
    let totalCost=0
    let outOfBudgetCount=0

    for (let i=0;i<prices.length;i++){
        if (prices[i]<=budgetPerItem){
            affordableItems.push(items[i])
            totalCost+=prices[i]
        }else{
            outOfBudgetCount++
        }
    }
    console.log('\nAffordable items: ', affordableItems)
    console.log('Total cost of affordable items: ', totalCost)
    console.log('Number of items out of budget: ', outOfBudgetCount)
}
rl.question("Enter item names: ", function (itemInput){
    let items=itemInput.split(',').map(name=>name.trim())

    rl.question("Enter prices in the same order as items: ", function(priceInput){
        let prices=priceInput.split(',').map(price=>parseFloat(price.trim()))

        rl.question("Enter budget per item: ", function(budgetInput){
            let budgetPerItem=parseFloat(budgetInput.trim())

            analyzeBudget(prices,items,budgetPerItem)

            rl.close()
        })
    })
})
