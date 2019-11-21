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

    
    
})


function functionName() {
    item = document.getElementById('firstname').value
    displayItem(item)
}

function displayItem(item) {
    document.querySelector('.important-item').innerHTML = item
}