/*
    Promise로 빵 만들기 실습
    
    시나리오: 
    1. 반죽 만들기 (1초)
    2. 발효하기 (2초)
    3. 굽기 (3초)
    
    각 단계는 비동기로 처리되며, 이전 단계가 완료되어야 다음 단계로 진행됩니다.
*/

// 1. 반죽 만들기 함수 작성
// Promise를 반환하는 함수를 만들어주세요
const makeDough = () => {
  // Promise 생성
  // setTimeout으로 1초 후에 완료되게 해주세요
  // 성공 시 "반죽 완성" 메시지 반환
  // 실패 시 "반죽 실패" 메시지 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!'성공') {
        resolve('반죽 완성')
      } else {
        reject('반죽 실패')
      }
    }, 1000)
  })
}

// 2. 발효하기 함수 작성
// 이전 단계의 결과를 받아서 처리하는 Promise를 만들어주세요
const fermentDough = (dough) => {
  // Promise 생성
  // setTimeout으로 2초 후에 완료되게 해주세요
  // 성공 시 "발효된 반죽" 메시지 반환
  // 실패 시 "발효 실패" 메시지 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ('발효 성공') {
        resolve('발효된 반죽')
      } else {
        reject('발효 실패')
      }
    }, 2000)
  })
}

// 3. 굽기 함수 작성
// 발효된 반죽을 받아서 굽는 Promise를 만들어주세요
const bakeBread = (fermentedDough) => {
  // Promise 생성
  // setTimeout으로 3초 후에 완료되게 해주세요
  // 성공 시 "맛있는 빵" 메시지 반환
  // 실패 시 "굽기 실패" 메시지 반환
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ('굽기 성공') {
        resolve('맛있는 빵')
      } else {
        reject('굽기 실패')
      }
    }, 3000)
  })
}

// 4. Promise 체이닝으로 실행하기
// 위에서 만든 함수들을 연결해서 실행해주세요
// then()을 사용하여 각 단계를 연결하고
// catch()로 에러를 처리해주세요
console.log('== 빵 만들기 시작! ==')

// 여기에 Promise 체이닝 코드 작성
// makeDough()로 시작해서 각 단계를 then()으로 연결하세요

/*
makeDough() //
  .then(
    (dough) => {
      console.log('1. dough: ', dough)
      return fermentDough(dough)
    },
    (reason) => {
      console.log('Error', reason)
      return '실패한 반죽'
    },
  ) //
  .then((fermentDough) => {
    if (fermentDough === '실패한 반죽') {
      return '실패한 반죽'
    }
    console.log('2. fermentDough', fermentDough)
    return bakeBread(fermentDough)
  })
  .catch((reason) => {
    console.log('Error', reason)
    return '실패한 발효'
  }) //
  .then((bread) => {
    if (bread === '실패한 반죽') {
      console.log('실패했어요 ㅜㅜ')
    } else {
      console.log('3. bread!!!!!!', bread)
    }
  })
  .catch((reason) => {
    console.log('Error', reason)
    return '실패한 빵'
  })
*/
async function createBread() {
  try {
    const dough = await makeDough()
    console.log(dough)
    const fermentedDough = await fermentDough(dough)
    console.log(fermentedDough)
    const bread = await bakeBread(fermentedDough)
    console.log('끝', bread)
  } catch (error) {
    console.log(error)
  }
}

// const results = await Promise.all([makeDough(), fermentDough(), bakeBread()])
// const result = await Promise.race([makeDough(), fermentDough(), bakeBread()])
// const result = await Promise.any([makeDough(), fermentDough(), bakeBread()])

console.log('TEST', result)
