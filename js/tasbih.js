
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
    if (subhanallahDisplayInitial === 33) {
        return alert('Subhan Allah Complete. Please Fillup another one')
    }
    subhanallahDisplayInitial += 1
    subhanallahDisplay.innerText = subhanallahDisplayInitial
})

subhanallahDecrementBtn.addEventListener('click', function () {
    if (subhanallahDisplayInitial === 0) {
        return alert("You can't added negative value")
    }
    subhanallahDisplayInitial -= 1
    subhanallahDisplay.innerText = subhanallahDisplayInitial
})


// Increment and decrement button for Alhamdulillah
alhamdulillahIncrementBtn.addEventListener('click', function () {
    if (alhamdulillahDisplayInitial === 33) {
        return alert('Alhamdulillah Complete. Please Fillup another one')
    }
    alhamdulillahDisplayInitial += 1
    alhamdulillahDisplay.innerText = alhamdulillahDisplayInitial
})

alhamdulillahDecrementBtn.addEventListener('click', function () {
    if (alhamdulillahDisplayInitial === 0) {
        return alert("You can't added negative value")
    }
    alhamdulillahDisplayInitial -= 1
    alhamdulillahDisplay.innerText = alhamdulillahDisplayInitial
})


// Increment and decrement button for AllahuAkbar
allahuakbarIncrementBtn.addEventListener('click', function () {
    if (allahuakbarDisplayInitial === 33) {
        return alert('AllahuAkbar Complete. Please Fillup another one')
    }
    allahuakbarDisplayInitial += 1
    allahuakbarDisplay.innerText = allahuakbarDisplayInitial
})
allahuakbarDecrementBtn.addEventListener('click', function () {
    if (allahuakbarDisplayInitial === 0) {
        return alert("You can't added negative value")
    }
    allahuakbarDisplayInitial -= 1
    allahuakbarDisplay.innerText = allahuakbarDisplayInitial
})


//Reset Button
resetBtn.addEventListener('click', function () {

    subhanallahDisplayInitial = 0
    subhanallahDisplay.innerText = subhanallahDisplayInitial

    alhamdulillahDisplayInitial = 0
    alhamdulillahDisplay.innerText = alhamdulillahDisplayInitial

    allahuakbarDisplayInitial = 0
    allahuakbarDisplay.innerText = allahuakbarDisplayInitial
})