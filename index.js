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
    for (let i = 0; i < scoreElem.length; i++) {
        const element = scoreElem[i];
        // console.log(arrData[i].category)
        scoreElem[i].innerHTML = arrData[i].category
        scoreValue[i].innerHTML = arrData[i].score + "/100"
        scoreIcon[i].setAttribute("src", arrData[i].icon)
        // console.log(arrData)
    }
}

