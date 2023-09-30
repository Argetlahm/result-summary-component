var arrData = [];

//must use live server to avoid CORS error. Use Live Server plugin in VS code. (ctrl + shift + p => type live server)
function fetchData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            arrData = data
            // console.log(arrData[1].category)
            updateData()
        })
}

fetchData("./data.json")
// console.log(arrData)



function updateData() {
    const scoreElem = document.getElementsByClassName("summary-title")
    const scoreValue = document.getElementsByClassName("summary-score")
    const scoreIcon = document.getElementsByClassName("summary-icon")
    // const scoreTotal = document.getElementsByClassName("total-score")
    for (let i = 0; i < scoreElem.length; i++) {
        // const element = scoreElem[i];
        // console.log(arrData[i].category)
        scoreElem[i].innerHTML = arrData[i].category
        scoreValue[i].innerHTML = arrData[i].score
        const scoreTotal = document.createElement("span")
        scoreTotal.setAttribute("class", "total-score")
        scoreTotal.innerHTML = " / 100"
        scoreValue[i].appendChild(scoreTotal)
        scoreIcon[i].setAttribute("src", arrData[i].icon)
        scoreIcon[i].setAttribute("alt", "icon")
        // console.log(scoreTotal)
    }
    
}

