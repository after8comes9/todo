let todolist = [];

let command = prompt(`Welcome to your to do list.\nWhat would you like to do?\nChoose from "new, "list", "delete" or "quit"`);

while (command !== 'quit') {

    if (command === `new`) {
        let newitem = prompt(`what would you like to add to the list?`);
        todolist[todolist.length] = newitem;
        console.log(`"${newitem}" was added to the list.`);
        command = prompt(`"${newitem}" has been added. What would you like to do next?\nChoose from "new, "list", "delete" or "quit"`);
    }   else if (command === 'list') {
        console.log(`********* TODO LIST *********`);
        for (let i of todolist) {
            console.log(todolist.indexOf(i)+1 + ` ${(i)}`);
        }
        command = prompt(`Your list is shown in the console.\nWhat would you like to do next?\nChoose from "new, "list", "delete" or "quit"`);
    }   else if (command === `delete`) {
        let deletewhat = prompt(`What is the number of the entry you would like to delete?`);
        todolist.splice(deletewhat-1, 1);
        command = prompt('The entry has been deleted. What would you like to do next?');
    }   else {
        command = prompt(`You can only choose "new, "list", "delete" or "quit"`);
    }
}