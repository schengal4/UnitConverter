/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const userValEl = document.getElementById("input")
const button = document.getElementById("btn-1")

function metersToFeet(numMeters) {
    let ft = 3.281*numMeters
    return ft.toFixed(3)
}
function litersToGallons(numLiters) {
    let gal = 0.264*numLiters
    return gal.toFixed(3)
}
function KilogramsToPounds(numKilograms) {
    let pound = 2.204*numKilograms
    return pound.toFixed(3)
}

function FeetToMeters(numFeet) {
    let meters = numFeet/3.281
    return meters.toFixed(3)
}
function GallonsToLiters(numGallons) {
    let liters = numGallons/0.264
    return liters.toFixed(3)
}
function PoundsToKilograms(numPounds) {
    let kilograms = numPounds/2.204
    return kilograms.toFixed(3)
}

const lengthInFtEl = document.getElementById("length")
const volInGalEl = document.getElementById("volume")
const massInPoundsEl = document.getElementById("mass")

button.addEventListener("click", function() {
    let userInput = userValEl.value
    
    lengthInFtEl.textContent = `${userInput} meters = ${metersToFeet(userInput)} feet | `
    lengthInFtEl.textContent += `${userInput} feet = ${FeetToMeters(userInput)} meters`
    
    volInGalEl.textContent = `${userInput} liters = ${litersToGallons(userInput)} gallons | `
    volInGalEl.textContent += `${userInput} gallons = ${GallonsToLiters(userInput)} liters` 
    
    massInPoundsEl.textContent = `${userInput} kilograms = `
    massInPoundsEl.textContent += `${KilogramsToPounds(userInput)} pounds | `
    massInPoundsEl.textContent += `${userInput} pounds = ${PoundsToKilograms(userInput)} kilograms`
})