let arr = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
console.log("Reversed:", reversed);

// Fourth sum
let n = 5;
for (let i = 0; i < n; i++){
    let row = " ";
    for (let j = 0; j < i + 1; j++){
        if ((i + j) % 2 == 0) {
            row += "1";
        } else {
            row += "0";
        }
    }
    console.log(row);
}

// fifth sum
let n = 5;
for (let i = 0; i < n; i++) {
    let row = " ";

    for (let j = 0; j <= i; j++) {
        row += "*";
    }
    for (let j = 0; j < 2 * (n-i-1); j++){
        row += " ";
    }
    for (let j = 0; j <= i; j++) {
        row += "*";
    }
  
    console.log(row);
}
for (let i = n - 1; i >= 0; i--) {
    let row = " ";

    for (let j = 0; j <= i; j++) {
        row += "*";
    }
    for (let j = 0; j < 2 * (n - i - 1); j++) {
        row += " ";
    }
    for (let j = 0; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}

//6 Sum//
let n = 5;
let counter = "1";

for (let i = 0; i < n; i++) {
    let row = " ";

    //space//
    for (let j = 0; j < n - i; j++) {
        row += " ";
    }
    // number
    for (let j = 1; j < i + 1; j++) {
        row += j + "";
    }
    for (let j = i - 1; j >= 1; j--){
        row += j + "";
    }
    console.log(row);
}
