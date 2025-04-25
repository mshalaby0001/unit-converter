
 
const userValue = document.getElementById("user-value")
const convertBtn = document.getElementById("convert-btn");

const lengthEl = document.getElementById("length-unit")
const volumeEl = document.getElementById("volume-unit")
const massEl = document.getElementById("mass-unit")

 
 
convertBtn.addEventListener("click", function () {
    userNumValue = parseInt(userValue.value)
    getLength(userNumValue)
    getVolume(userNumValue)
    getMass(userNumValue)
})

 function getLength (userNumValue){
    let feetValue = userNumValue * 3.281 
    let meterValue = userNumValue / 3.281 
    lengthEl.innerHTML = `${userNumValue} meters = ${feetValue.toFixed(3)} feet | ${userNumValue} feet = ${meterValue.toFixed(3)} meters`
    
}
 function getVolume (userNumValue){
    let gallonValue = userNumValue * 0.264
    let literValue = userNumValue / 0.264
    volumeEl.innerHTML = `${userNumValue} liter = ${gallonValue.toFixed(3)} gallon | ${userNumValue} gallon = ${literValue.toFixed(3)} liter`
 }
 function getMass (userNumValue){
    let poundValue = userNumValue * 2.204 
    let kiloValue = userNumValue / 2.204 
    massEl.innerHTML = `${userNumValue} kilogram = ${poundValue.toFixed(3)} pound | ${userNumValue} pound = ${kiloValue.toFixed(3)} kilogram`
 }
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


 