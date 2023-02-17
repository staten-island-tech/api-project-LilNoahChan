import './style.css'

const DOMSelectors = {
    SSB: document.getElementById("SSB"),
    SM: document.getElementById("SM"),
    LOZ: document.getElementById("LOZ"),
    SPL: document.getElementById("SPL"),
    amiibos: document.getElementById("likeTheActualAmiibos"),
}

const amiiboSerieses = {
    SSB: "0x00",
    SM: "0x01",
    LOZ: "0x09",
    SPL: "0x04",
}

const URL = "https://amiiboapi.com/api/amiibo/?amiiboSeries="
// want to add "?amiiboseries=whatever we want it to be"

async function fartyMcFartster(URL) {
    try {

        const response = await fetch(URL);
        const data = await response.json();

        data.amiibo.forEach(x =>

            DOMSelectors.amiibos.insertAdjacentHTML("afterbegin",
                `
      <h1> ${x.name} </h1>
      `
            )
        )


    } catch (error) {
        console.log(`${error}`)
    }
}

function clearData() {
    DOMSelectors.amiibos.innerHTML = ""
}


DOMSelectors.SSB.addEventListener("click", function () {

    clearData();
    fartyMcFartster(`${URL}${amiiboSerieses.SSB}`)

})
DOMSelectors.SM.addEventListener("click", function () {

    clearData();
    fartyMcFartster(`${URL}${amiiboSerieses.SM}`)

})
DOMSelectors.LOZ.addEventListener("click", function () {

    clearData();
    fartyMcFartster(`${URL}${amiiboSerieses.LOZ}`)

})
DOMSelectors.SPL.addEventListener("click", function () {

    clearData();
    fartyMcFartster(`${URL}${amiiboSerieses.SPL}`)

})