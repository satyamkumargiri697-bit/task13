// Variable 1: Pehla number check karne ke liye
let pehlaNumber = 5;

// Variable 2: Doosra number check karne ke liye
let doosraNumber = 10;

// Variable 3: Pehle number ka remainder (शेषफल)
let remainder1 = pehlaNumber % 2;

// Variable 4: Doosre number ka remainder
let remainder2 = doosraNumber % 2;


// --- Pehle Number (5) ki checking ---
if (remainder1 === 0) {
    console.log("The number " + pehlaNumber + " is even.");
} else {
    console.log("The number " + pehlaNumber + " is odd.");
}


// --- Doosre Number (10) ki checking ---
if (remainder2 === 0) {
    console.log("The number " + doosraNumber + " is even.");
} else {
    console.log("The number " + doosraNumber + " is odd.");
}