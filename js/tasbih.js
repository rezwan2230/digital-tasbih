
const subhanallahDisplay = document.getElementById('subhanallah-display')
const subhanallahIncrementBtn = document.getElementById('subhanallah-increment-btn')
const subhanallahDecrementBtn = document.getElementById('subhanallah-decrement-btn')

const alhamdulillahDisplay = document.getElementById('alhamdulillah-display')
const alhamdulillahIncrementBtn = document.getElementById('alhamdulillah-increment-btn')
const alhamdulillahDecrementBtn = document.getElementById('alhamdulillah-decrement-btn')

const allahuakbarDisplay = document.getElementById('allahuakbar-display')
const allahuakbarIncrementBtn = document.getElementById('allahuakbar-increment-btn')
const allahuakbarDecrementBtn = document.getElementById('allahuakbar-decrement-btn')

const resetBtn = document.getElementById('reset-btn')

let subhanallahDisplayInitial = 0
let alhamdulillahDisplayInitial = 0
let allahuakbarDisplayInitial = 0


// Increment and decrement button for Subhanallah
subhanallahIncrementBtn.addEventListener('click', function () {
    subhanallahDisplayInitial += 1
    if (subhanallahDisplayInitial > 33) {
        alert('Subhan Allah Complete. Please Fillup another one')
    }
    else {
        subhanallahDisplay.innerText = subhanallahDisplayInitial
    }
})
subhanallahDecrementBtn.addEventListener('click', function () {
    subhanallahDisplayInitial -= 1
    if (subhanallahDisplayInitial < 0) {
        alert("You can't added negative value")
    }
    else {
        subhanallahDisplay.innerText = subhanallahDisplayInitial
    }
})


// Increment and decrement button for Alhamdulillah
alhamdulillahIncrementBtn.addEventListener('click', function () {
    alhamdulillahDisplayInitial += 1
    if (alhamdulillahDisplayInitial > 33) {
        alert('Alhamdulillah Complete. Please Fillup another one')
    }
    else {
        alhamdulillahDisplay.innerText = alhamdulillahDisplayInitial
    }
})
alhamdulillahDecrementBtn.addEventListener('click', function () {
    alhamdulillahDisplayInitial -= 1
    if (alhamdulillahDisplayInitial < 0) {
        alert("You can't added negative value")
    }
    else {
        alhamdulillahDisplay.innerText = alhamdulillahDisplayInitial
    }
})


// Increment and decrement button for AllahuAkbar
allahuakbarIncrementBtn.addEventListener('click', function () {
    allahuakbarDisplayInitial += 1
    if (allahuakbarDisplayInitial > 33) {
        alert('Alhamdulillah Complete. Please Fillup another one')
    }
    else {
        allahuakbarDisplay.innerText = allahuakbarDisplayInitial
    }
})
allahuakbarDecrementBtn.addEventListener('click', function () {
    allahuakbarDisplayInitial -= 1
    if (allahuakbarDisplayInitial < 0) {
        alert("You can't added negative value")
    }
    else {
        allahuakbarDisplay.innerText = allahuakbarDisplayInitial
    }
})


//Reset Button
resetBtn.addEventListener('click', function () {
    subhanallahDisplay.innerText = 0
    alhamdulillahDisplay.innerText = 0
    allahuakbarDisplay.innerText = 0
})