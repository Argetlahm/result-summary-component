var arrData = {};

//must use live server to avoid CORS error. Use Live Server plugin in VS code. (ctrl + shift + p => type live server)
function fetchData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((json) => arrData.data = json)
}

fetchData("./data.json")
console.log(arrData)

const scoreElem = document.getElementsByClassName("summary-score")
for (let i = 0; i < scoreElem.length; i++) {
    // const element = scoreElem[i];
    // console.log(scoreElem)
}