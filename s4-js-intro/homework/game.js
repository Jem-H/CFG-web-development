// Homework instructions: 
// - Use alert() and prompt()
// - Use variables with if/else statements

let shopEntry = `start`;
let buyFood = `start`;
let shoppingList = [];

// https://www.w3schools.com/js/js_loop_while.asp
while (shopEntry==`start`){
    shopEntry = prompt(`Would you like to go the the shops? (Y/N)`);

    if (shopEntry==`Y`){
        alert(`Welcome to the Jemima\'s shop!`);
        buyFood = `go`;

    } else if (shopEntry==`N`){
        alert(`Oh dear, I see that you\'re not interested...`);
        
    } else {
        alert(`Please try again.`);
        shopEntry = `start`;
    }

}


while (buyFood==`go`){
    alert(`You have ${shoppingList.length} items.`);
    newItem = prompt(`Please enter an item to buy:`);
    shoppingList.push(newItem);
    buyFood = prompt(`Would you like to continue with your shop? (Y/N)`);

    if (buyFood==`Y`){
        buyFood = `go`;

    } else if (buyFood==`N`){
        buyFood = `stop`;
        alert(`Thank you for shopping. Goodbye!`);        
    } else {
        alert(`Please try again.`);
        buyFood = `go`;
    }

}


