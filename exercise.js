let maxnum = prompt(`please enter a max number`);
let tries = 1;

while (isNaN(maxnum)) {
    maxnum = prompt(`that's not a number. Please enter a number.`);
}

let randnum = Math.floor((Math.random() * maxnum) + 1);

let answer = prompt(`guess the random number`);

while (answer != randnum) {
    answer < randnum ? answer=prompt("The number should be higher") : answer=prompt("The number should be lower");
    tries ++;

    if (isNaN(answer)) {
        maxnum = prompt(`that's not a number. Please enter a number.`);
    }

    else if (answer == randnum) {
        alert(`congratulations, you found the number with ${tries} tries`)
    }
}