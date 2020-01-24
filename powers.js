const flightButton = document.querySelector("#activate-flight")
const flightElement = document.querySelector("#flight")

const mindReadingButton = document.querySelector("#activate-mindreading")
const mindReadingElement = document.querySelector("#mindreading")

const xrayButton = document.querySelector("#activate-xray")
const xrayElement = document.querySelector("#xray")

const killPowersButton = document.querySelector("#deactivate-all")
const allThePowersButton = document.querySelector("#activate-all")
const allPowersElement = document.querySelector("#powerList")

const powerElementArray = [flightElement, mindReadingElement, xrayElement]
const powerButtonArray = [flightElement, mindReadingElement, xrayElement]

const togglePower = (element) => {
    element.classList.toggle("enabled");
}

const toggleAllPowers = (element) => {
    element.classList.add("enabled");
    flightElement.classList.remove("disabled");
    mindReadingElement.classList.remove("disabled");
    xrayElement.classList.remove("disabled");
}

const killAllPowers = (element) => {
    element.classList.remove("enabled");
    flightElement.classList.add("disabled");
    mindReadingElement.classList.add("disabled");
    xrayElement.classList.add("disabled");
}

const buttonArray = [flightButton, mindReadingButton, xrayButton]
const elementArray = [flightElement, mindReadingElement, xrayElement]

const makeButtonsClickable = (array1, array2) => {
    array1.forEach(button => {
        button.addEventListener("click", () => {
            for (i = 0; i < array2.length; i++)
            togglePower(array2[i])
        })
    })
}

makeButtonsClickable(buttonArray, elementArray)

/* flightButton.addEventListener("click", () => {
    togglePower(flightElement);
}) 

mindReadingButton.addEventListener("click", () => {
    togglePower(mindReadingElement);
})

xrayButton.addEventListener("click", () => {
    togglePower(xrayElement);
}) */

allThePowersButton.addEventListener("click", () => {
    toggleAllPowers(allPowersElement);
})

killPowersButton.addEventListener("click", () => {
    killAllPowers(allPowersElement);
})