const url = 'http://api.open-notify.org/astros.json'

fetch(url) //
  .then((response) => {
    console.log(response) // 네트워크 통신에 관한 객체
    return response.json() // json is also async
  })
  .then((data) => {
    console.log(data) // 실제 데이터
    const mainElem = document.getElementById('main')
    const people = data.people // 실제 사람 데이터가 들어가 있는 배열

    // 데이터 가공
    const peopleName = people.map((obj) => {
      return obj.name
    })
    peopleName.forEach((name) => {
      const spanElem = document.createElement('span')
      spanElem.textContent = name
      mainElem.appendChild(spanElem)

      // 줄바꿈을 spanElem마다 해준다.
      const brElem = document.createElement('br')
      mainElem.appendChild(brElem)
    })
  })
// then 체이닝
