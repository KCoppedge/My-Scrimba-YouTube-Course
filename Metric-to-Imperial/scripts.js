const userInputEl = document.getElementById("userInput")
const convertBtn = document.getElementById("convertBtn")
let lengthEl = document.getElementById("lengthEl")
let volumeEl = document.getElementById("volumeEl")
let massEl = document.getElementById("massEl")

convertBtn.addEventListener("click", function () {
    const val = Number(userInputEl.value)

    // Check if 'val' is NaN or if the input is empty
    if (isNaN(val) || userInputEl.value === "") {
        // Clear the input or alert the user
        userInputEl.value = ""
        alert("Please enter a valid number")
    } else {
        const unitS = val === 1 ? "" : "s"

        const feet = (val * 3.281).toFixed(3)
        const meters = (val / 3.281).toFixed(3)
        lengthEl.textContent = `${val} meter${unitS} = ${feet} feet | ${val} feet = ${meters} meter${unitS}`

        const gallons = (val * 0.264).toFixed(3)
        const liters = (val / 0.264).toFixed(3)
        volumeEl.textContent = `${val} liter${unitS} = ${gallons} gallons | ${val} gallons = ${liters} liter${unitS}`

        const pounds = (val * 2.204).toFixed(3)
        const kilos = (val / 2.204).toFixed(3)
        massEl.textContent = `${val} kilogram${unitS} = ${pounds} pounds | ${val} pounds = ${kilos} kilogram${unitS}`
    }
})