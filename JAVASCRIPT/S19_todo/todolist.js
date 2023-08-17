window.setTimeout(function () {
    if (window.innerWidth + 300 > window.outerWidth) {
        alert('*** I N I T I A L  P A G E  L O A D ***\nPlease:\n  1. open dev-console\n  2. then reload page')
    } else {
        alert("Hello! Welcome to your to-do list!");
        let itemList = [];
        let action = 0;
        while (action !== "quit") {
            action = prompt("What would you like to do?");
            if (action === "quit") break;
            if (action === "new") {
                let newItem = prompt("Enter a new item to the list:");
                itemList.push(newItem);
                console.log(`${newItem} added to the list.`);
            } else if (action === "list") {
                console.log("**************************************");
                for (i = 0; i < itemList.length; i++) {
                    console.log(`${i} : ${itemList[i]}`);
                }
                console.log("**************************************");
            }
            else if (action === "delete") {
                let itemDel = prompt("Delete which item?");
                if (itemDel == 0) {
                    itemList.splice(0, 1);
                    console.log(`Item removed.`);
                } else {
                    itemList.splice(itemDel, itemDel);
                    console.log(`Item removed.`);
                }
            }
        }
        alert("Okay, quitting. Refresh the page to use the list again");
    }
}, 500);


