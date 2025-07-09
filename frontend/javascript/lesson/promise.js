// Promise 생산자 만들기
const promise = new Promise((resolve, reject)=>{
  // 상황에 따라 언제 resolved, rejected 시킬지 결정해서 호출한다

  // !"성공" false
  // "성공" true
  if ('성공') {
    setTimeout(() => {
      resolve('알맹이') // fulfilled 상태로 바뀌고
    }, 2000)
  } else {
    setTimeout(() => {
      reject('서버 장애') // rejected 상태로 바뀐다.
    }, 3000)
  }
})


// Consumer 소비자 만들기
promise // promise 객체를 반환하면 이 자리에 올 수 있다
  .then((value)=>{
    // resolved 상태로 바뀔 때 실행됌
    console.log(value)
    console.log(promise)
  })
  .catch((reason)=>{
    // rejected 상태로 바뀔 때 실행됌
    console.log(reason)
    console.log(promise)
  }).finally(()=>{ // 무조건 한 번은 실행됌
    console.log("끝났다.")
  })

  fetch


