const flightButton = document.querySelector("#activate-flight")
const flightElement = document.querySelector("#flight")

const mindReadingButton = document.querySelector("#activate-mindreading")
const mindReadingElement = document.querySelector("#mindreading")

const xrayButton = document.querySelector("#activate-xray")
const xrayElement = document.querySelector("#xray")

const killPowersButton = document.querySelector("#deactivate-all")
const allThePowersButton = document.querySelector("#activate-all")
const allPowersElement = document.querySelector("#powerList")

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

flightButton.addEventListener("click", () => {
    togglePower(flightElement);
})

mindReadingButton.addEventListener("click", () => {
    togglePower(mindReadingElement);
})

xrayButton.addEventListener("click", () => {
    togglePower(xrayElement);
})

allThePowersButton.addEventListener("click", () => {
    toggleAllPowers(allPowersElement);
})

killPowersButton.addEventListener("click", () => {
    killAllPowers(allPowersElement);
})