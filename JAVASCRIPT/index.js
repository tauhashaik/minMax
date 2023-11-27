let resultInput = document.getElementById('resultInput')
let calcBtn1 = document.getElementById('calcBtn1')
let calcBtn2 = document.getElementById('calcBtn2')

// Creating new array.
let mArray = [5, 7, 9, 11]

// function that has spread operator/rest parameter that loops through the array and usint the Math.min function to return the smallest value in the array. 
function min(){
   let minResult = Math.min(...mArray);
   resultInput.value = minResult;
}

// function that has spread operator/rest parameter that loops through the array and usint the Math.max function to return the Largestt value in the array. 
function max(){
   let maxResult = Math.max(...mArray);
   resultInput.value = maxResult;
}
// Adding Event Listeners to give functionality to buttons.
calcBtn1.addEventListener('click',min );
calcBtn2.addEventListener('click',max );