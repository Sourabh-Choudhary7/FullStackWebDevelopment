const inputfield = document.getElementById('input-box') 
const displayKey = document.getElementById('KeyDisplay')

inputfield.addEventListener("keypress", (e) => {
    displayKey.innerText = "You have pressed ~ " + e.key;
})