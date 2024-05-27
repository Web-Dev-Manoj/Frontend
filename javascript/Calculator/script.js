let compute = 0;

let button_input = document.querySelectorAll(".input");

let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
    input.value = "";
};

//Access each class using forEach
button_input.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if (compute == 1) {
            input.value = "";
            compute = 0;
        }

        input.value += button_class.value;
    });
});

//Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
    compute = 1;
    let inp_val = input.value;
    try {
        let solution = Math.evaluate(inp_val);
        console.log(solution);
        if (Number.isInteger(solution)) {
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);
        }
    } catch (err) {
        alert("Invalid Input");
    }
});

// clear input
clear.addEventListener("click", () => {
    input.value = "";
});

// erase single digit
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});