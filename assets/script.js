
let menu = document.querySelectorAll('.menu')
let gbTd = document.querySelector("#qty-gb")
let ccTd = document.querySelector('#qty-cc')
let sugarTd = document.querySelector("#qty-sugar")
let totTd = document.querySelector('#qty-total')

// First, tell us your name
let yourName = "Kaylie Lane" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let tot = 0 // Total

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(e) {
    let gb = parseInt(gbTd.textContent);
    gb = gb + 1;
    gbTd.textContent = gb;
    let tot = parseInt(totTd.textContent);
    tot = tot +1;
    totTd.textContent = tot;
});

// Event listener for clicks on the "+" button for Chocolate Chip cookies
ccPlusBtn.addEventListener('click', function() {
    let cc = parseInt(ccTd.textContent);
    cc = cc + 1;
    ccTd.textContent = cc;
    let tot = parseInt(totTd.textContent);
    tot = tot +1;
    totTd.textContent = tot;
});

// Event listener for clicks on the "+" button for Sugar Cookie cookies
sugarPlusBtn.addEventListener('click', function() {
    let sugar = parseInt(sugarTd.textContent);
    sugar = sugar + 1;
    sugarTd.textContent = sugar;
    let tot = parseInt(totTd.textContent);
    tot = tot +1;
    totTd.textContent = tot;
});

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function() {
    let gb = parseInt(gbTd.textContent);
    gb = gb - 1;
    gbTd.textContent = gb;
    let tot = parseInt(totTd.textContent);
    tot = tot -1;
    totTd.textContent = tot;
});

// Event listener for clicks on the "-" button for Chocolate Chip cookies
ccMinusBtn.addEventListener('click', function() {
    let cc = parseInt(ccTd.textContent);
    cc = cc - 1;
    ccTd.textContent = cc;
    let tot = parseInt(totTd.textContent);
    tot = tot -1;
    totTd.textContent = tot;
});

// Event listener for clicks on the "-" button for Sugar Cookie cookies
sugarMinusBtn.addEventListener('click', function() {
    let sugar = parseInt(sugarTd.textContent);
    sugar = sugar - 1;
    sugarTd.textContent = sugar;
    let tot = parseInt(totTd.textContent);
    tot = tot -1;
    totTd.textContent = tot;
});
