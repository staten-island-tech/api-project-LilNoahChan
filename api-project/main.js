import './style.css'

const DOMSelectors = {
    SSB: document.getElementById("SSB"),
    SM: document.getElementById("SM"),
    LOZ: document.getElementById("LOZ"),
    SPL: document.getElementById("SPL"),
    MSS: document.getElementById("MSS"),
    amiibos: document.getElementById("likeTheActualAmiibos"),
}

const amiiboSerieses = {
    SSB: "0x00",
    SM: "0x01",
    LOZ: "0x09",
    SPL: "0x04",
    MSS: "0x0E",

}

const URL = "https://amiiboapi.com/api/amiibo/?amiiboSeries="


async function fartyMcFartster(URL) {
    try {

        const response = await fetch(URL);
        const data = await response.json();

        data.amiibo.forEach(x =>

            DOMSelectors.amiibos.insertAdjacentHTML("afterbegin",
                `
      <h1> ${x.name} </h1>
      <img src="${x.image}" alt="Image of ${x.name}">
      <div class= "bio">
      <body>Game: ${x.gameSeries} <br>
      Release in NA: ${x.release.na}<br>
      Release in JP: ${x.release.jp}<br>
      Release in EU: ${x.release.eu}<br>
      Release in AU: ${x.release.au}
      </body>
      </div>
      
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
DOMSelectors.MSS.addEventListener("click", function () {

    clearData();
    fartyMcFartster(`${URL}${amiiboSerieses.MSS}`)

})