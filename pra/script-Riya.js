// Advance pattern

//hollow patern
let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    if (i === 1 || i === n || j === 1 || j === n) {
      row += "*";
    } else {
      row += " ";
    }
  }
    console.log(row);
  
}


// Second sum
let n = 5;
for (let i = 0; i < n; i++){
  let row = " ";
  for (let j = 0; j < n - i; j++) {
    row += " ";
  } for (let j = 0; j < i; j++){
    row += "*"
  }
  console.log(row)
}

// third sum
let n = 5; let counter = 1;

for (let i = 0; i< n; i++){
  let row = " ";
  for (let j = 0; j < i + 1; j++){
    row += counter + " ";
    counter++;
  }
  console.log(row)
}




