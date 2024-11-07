async function init() {
  const url = 'https://api.thecatapi.com/v1/images/search'

  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(2)
    document.getElementById('hImage').src = data[0].url
  } catch (error) {
    console.log(error)
  }
}
