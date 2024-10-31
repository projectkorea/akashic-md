const url = 'https://api.thecatapi.com/v1/images/search'

fetch('https://api.thecatapi.com/v1/images/search') //
  .then((response) => {
    console.log(response)
    return response.json() // json is also async
  })
  .then((data) => {
    console.log(data)
    const fetchedUrl = data[0].url
    document.getElementById('hImage').src = fetchedUrl
  })
