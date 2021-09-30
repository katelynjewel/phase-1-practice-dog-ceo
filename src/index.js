console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

//////////////// MY CODE /////////////////////
    // fetch(imgUrl)
    // .then(resp => resp.json())
    // .then(allDogs => {
    //     for (const data in allDogs) {
    //         console.log(Object.keys(data))
    //         const image = document.createElement('img')
    //         image.src = (Object.keys(allDogs.message))

    //         // const imageContainer = document.getElementById('dog-image-container')
    //         // imageContainer.append(image)
    //     }
    // })

    // fetch(breedUrl)
    //     .then(resp => resp.json())
    //     .then(data => console.log(data.message))

const imageContainer = document.getElementById('dog-image-container')

    fetch(imgUrl)
        .then(resp => resp.json())
        // .then(consol.log)
        // .then(data => console.log(data.message))
        .then(data => {
            // console.log(Object.entries(data)) -- harder to use due to creating new array
            // console.log(data.message)
            data.message.forEach(element => {
                // console.log(element)
                const newImage = document.createElement('img')
                newImage.src = element
                imageContainer.append(newImage)
            })
        })

const dogBreedsContainer = document.getElementById('dog-breeds')

    fetch(breedUrl)
        .then(resp => resp.json())
        // .then(data => console.log(data))
        // .then(data => console.log(data.message))
        // .then(data => console.log(Object.keys(data.message)))
        .then(data => {
            // console.log(Object.keys(data.message))
            const breeds = Object.keys(data.message)
            // console.log(breeds)
            breeds.forEach(breed => {
                const newLi = document.createElement('li')
                newLi.textContent = breed
                dogBreedsContainer.append(newLi)
                // console.log(data.message)
                // console.log(data.message[breed])

                // newLi.addEventListener('click', (event) => {
                //     newLi.style.color = 'firebrick'
                        // console.log(newLi.style.color)
                newLi.addEventListener('click', (event) => {
                    if (newLi.style.color === 'firebrick') {
                        newLi.style.color = 'black'
                    } else {
                        newLi.style.color = 'firebrick'
                    }
                    
                })
            })
        })
