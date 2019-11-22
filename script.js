document.addEventListener('DOMContentLoaded', function() {
    let image = document.querySelector('.pic-of-day')
    let iframe = document.querySelector('iframe')
    let title = document.querySelector('.title')
    let desc = document.querySelector('.description')
    let form = document.querySelector('.form')

    $.getJSON("https://api.nasa.gov/planetary/apod?api_key=ewOaDXWglBEsQAKX2SApET8IsuyxxW6hCydetUE3")

    .then(function(response) {
        console.log(response)
        if (`${response.url}`.includes("youtube")) {
            iframe.src = `${response.url}`
            image.classList.add('hidden')
        } else {
            image.src = `${response.url}`
            iframe.classList.add('hidden')
        }
        title.innerHTML = `${response.title}`
        desc.innerHTML = `${response.explanation}`
        console.log(response.title)
    })

    .catch(function(response) {
        console.log('didnt work');
    });

    form.addEventListener('submit', () => {
        console.log('ah')
    })
    console.log(localStorage.length)
    setInterval(setDate(), 1000);
    setDate()
    
    if (localStorage.length > 0) {
        displayItem()
    }
})
function setDate() {
    let now = new Date()

    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = now.getHours()

    if (minutes < 10  && hours < 10) {
        document.querySelector('.clock').innerHTML = `0${hours} : 0${minutes}`
    } else if (hours < 10) {
        document.querySelector('.clock').innerHTML = `0${hours} : ${minutes}`
    } else if (minutes < 10) {
        document.querySelector('.clock').innerHTML = `${hours} : 0${minutes}`
    } else {
        document.querySelector('.clock').innerHTML = `${hours} : ${minutes}`
    }   
}

function functionName() {
    item = document.getElementById('firstname').value
    localStorage.setItem('item', JSON.stringify(item))
    displayItem()
}

function displayItem() {
    let item = JSON.parse(localStorage.getItem('item'));
    document.querySelector('.important-item').innerHTML = "Your most important task: " + item
    document.querySelector('.input-line').classList.add('hidden')
    document.querySelector('.input-button').classList.add('hidden')
}