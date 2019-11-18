window.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('.container')
    let iframe = document.querySelector('iframe')
    let title = document.querySelector('.title')
    let desc = document.querySelector('.description')

    $.getJSON("https://api.nasa.gov/planetary/apod?api_key=ewOaDXWglBEsQAKX2SApET8IsuyxxW6hCydetUE3")

    .then(function(response) {
        console.log(response)
        if (`${response.url}`.includes("youtube")) {
            iframe.src = `${response.url}`
        } else {
            container.setAttribute("background-url", `${response.url}`)
        }
        title.innerHTML = `${response.title}`
        desc.innerHTML = `${response.explanation}`
        console.log(response.title)
    })

    .catch(function(response) {
        console.log('didnt work');
    });
}) 