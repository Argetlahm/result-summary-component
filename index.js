var arrData = [];

//must use live server to avoid CORS error. Use Live Server plugin in VS code. (ctrl + shift + p => type live server)
function fetchData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((json) => arrData.push(json))
}

fetchData("./data.json")
// console.log(arrData)

const scoreElem = document.getElementsByClassName("summary-title")
for (let i = 0; i < scoreElem.length; i++) {
    const element = scoreElem[i];
    // scoreElem[i].innerHTML = arrData.data[0].category
    console.log(arrData)
}
