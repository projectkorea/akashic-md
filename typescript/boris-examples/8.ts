// fs모듈의 readFile, appendFile 예시
// 콜백의 타입을 보고 비동기로 호출되는지 안되는지 알 수 없음을 나타냄
// 이건 promise로 래핑해주고 async, await로 가독성을 챙기기

// 8-1 ~ 8-2 
// 문제제기

// 8-3 Promise

function appendAndReadPromise(path:string, data: string): Promise<string> {
  return appendPromise(path, data)
    .then(() => readPromise(path))
    .catch((err) => {
      console.error(err)
    })
}

// 이걸 콜백으로 짜볼까?
function appendAndRead(path: string, data:string, cb: (error:Error | null, result:string|null)=>void) {
  appendFile(path, data, (err) => {
    if(err) {
      return cb(err, null)
    }
    readFile(path , (err, result) => {
      if(err) {
        return cb(err, null)
      }
      cb(null, result)
    }
  })
}

// 다시 promise로

type Executor = (
  resolve: Function,
  reject: Function
) => void

class Promise {
  constructor(executor: Executor) {}
}

import { readFile } from 'fs';
function readFilePromise(path:string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, (err, result) => {
      if(err) {
        return reject(err)
      }
      resolve(result)
    }
  })
}

readFilePromise('test.txt')
  .then((result) => {console.log(result)});


// 더 자세히 만들어보자
type ExecutorDetail<T,E extends Error> = (
  resolve: (result: T) => void,
  reject: (error: E) => void
) => void

class PromiseDetail<T, E extends Error> {
  constructor(executor: ExecutorDetail<T,E>) {}
}

class Promise<T,E extends Error> {
  constructor(executor: ExecutorDetail<T,E>) {}
  then<U, F extends Error>(g: (result:T) => Promise<U,F>): Promise<U,F> {}
  catch<U, F extends Error>(g: (error:E) => Promise<U,F>): Promise<U,F> {}
}

// 에러 타입을 지정하지 않아도 되게끔 Promise 타입을 조금 느슨하게 풀어주자

type ExecutorFinal = (
  resolve: (result:T) => void,
  reject: (error: unknown) => void // 프로미스 거부되었다고 항상 Error인 것은 아니다. 호출 상위 스택에서 throw로 모든 것을 던질 수 있기 때문이다.
) => void

class PromiseFinal<T> {
  // Promise<T>의 제네릭 T는 resolve를 통해 반환되는 값의 타입을 의미
  constructor(executor: ExecutorFinal) {}
  then<U>(g: (result:T) => PromiseFinal<U>): PromiseFinal<U> {}
  // then에서 리턴되는 타입 
  catch<U>(g: (error:unknown) => PromiseFinal<U>): PromiseFinal<U> {}
}

// 8.4 async, await
// js 수준으로 다룸

// 8-5 비동기 스트림

// 8-6 웹 워커를 활용한 멀티 스레드