const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const updateValue = document.getElementById('updateValue');
const resetBtn = document.getElementById('resetBtn');

// for Decrement
decrementBtn.addEventListener("click", () => {
    const value = Number(updateValue.innerText);
    console.log(value)
    if(value > 0) {
        updateValue.innerText = value - 1;
    }
    else {
        alert("Negative value is not allowed");
    }
})

// for Increment
incrementBtn.addEventListener("click", () => {
    const value = Number(updateValue.innerText);

    if(value < 25) {
        updateValue.innerText = value + 1;
    }
    else {
        alert("Limit exceeded");
    }
})

// for Reset
resetBtn.addEventListener("click", ()=>{
    updateValue.innerText = 0;
})