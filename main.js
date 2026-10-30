let adviceId = document.getElementById("title-id");
let adviceContent = document.getElementById("advice");
let btn = document.getElementById("btn");

btn.addEventListener("click", generateAdvice);

function generateAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then(data => {
        if (!data.ok) {
            throw new Error(`HTTP error! status: ${resp.status}`)
        }

        return data.json()
    })
    .then(data => data["slip"])
    .then(data => {
        adviceId.textContent = data["id"];
        adviceContent.textContent = `"${data["advice"]}"`;
    })
    .catch(err => console.error(`rror fetching data: ${err}`))
}