const url = 'https://api.thecatapi.com/v1/images/search'
// json 포맷의 데이터를 주는 주소

fetch('https://api.thecatapi.com/v1/images/search') //
  .then((response) => {
    // response는 응답에 관한 객체가 반환이 된다.
    console.log(response)
    return response.json() // json is also async
  })
  .then((data) => {
    console.log(data)
    const fetchedUrl = data[0].url
    document.getElementById('hImage').src = fetchedUrl
  })
