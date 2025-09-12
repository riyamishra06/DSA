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


//linear search//

let arr = [2, 4, 6, 8, 10, 12, 14];
let found = false;
let key = 20;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === key) {
        found = true;
        break;
    }
}

if (!found) {
    console.log("Key is not found");
}


//largest no in array
let arr = [4, 5, 10, 23, 45]
let max = arr[0];

for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(max)

//Binary search
let arr = [3, 4, 5, 6, 7, 8, 9];
let key = 3;
let start = 0;
let end = arr.length - 1;
let index = arr[0];

while (start <= end) {
    let mid = (start + end) / 2;

    if (arr[mid] == key) {
        index = mid;
        console.log('Index of key is' +" " + key + " " +index)
    }
    if (arr[mid] < key) {
        start = mid + 1;
    }
    else{
        end = mid -1;
    }
   
}
 //Reverse array
 let arr = [2, 3, 4, 5];
let start = 0;
let end = arr.length - 1;

while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
    
}
console.log(arr);


//Print pair
let arr = [2,4,6,8,10];

for(let i =0;i<arr.length;i++){
    let curr = arr[i];
    for(let j =i+1;j<arr.length;j++){
        console.log( " (" + curr + " , " + arr[j]+")");
    }
    
}

//Subpair
let arr = [2,4,6,8,10];
for(let i = 0;i<arr.length;i++){
    let curr = arr[i];
    for(let j = i;j<arr.length;j++){
        let subarray = " ";
        for(let k = i;k<=j;k++){
            subarray += arr[k] + " ";
        }
        console.log(subarray);
    }
}

//sum od subarray

//Sort
//let arr = [5,4,6,3,7,2];
for(let i = 0 ;i <arr.length-1;i++){
    let minpoint = i;
    for(let j = i + 1;j<arr.length;j++){
        if(arr[minpoint] > arr[j]){
            minpoint = j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[minpoint];
    arr[minpoint] = temp;
    
}
console.log(arr);