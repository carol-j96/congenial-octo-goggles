console.log('Bill Split Calculator')
const readline=require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Enter bill Amount: ", function(billAmount) {
    billAmount = parseFloat(billAmount);

    rl.question("Enter tip percentage: ", function(tipPercentage) {
        tipPercentage = parseFloat(tipPercentage);

        rl.question("Enter number of people: ", function(numPeople) {
            numPeople = parseInt(numPeople);

            const tipAmount = (billAmount * tipPercentage) / 100;
            const totalAmount = billAmount + tipAmount;
            const perPerson = totalAmount / numPeople;

            console.log(`\nTotal bill (with tip): $${totalAmount.toFixed(2)}`);
            console.log(`Each person should pay: $${perPerson.toFixed(2)}`);

            rl.close(); 
        });
    });
});

