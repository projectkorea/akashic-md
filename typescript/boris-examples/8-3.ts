import { readFile, appendFile } from 'fs'

readFile('8-3.ts', null, (err, data) => {
  if (err) {
    throw Error
  }
  console.log(data)
})

appendFile('8-3.ts', null, (err) => {
  if (err) {
    throw '에러 발생'
  }
})

function appendAndRead(cb: (error: Error, data: string) => void): void {
  appendFile('8-3.ts', null, (err) => {
    if (err) {
      return cb(err, null)
    }
    readFile('8-3.ts', null, (err, data) => {
      if (err) {
        return cb(err, null)
      }
      return cb(null, data.toString())
    })
  })
}

appendAndRead((err, data) => {
  if (err) return
  console.log(`Your Final Data is ${data}`)
})

type _Executor<T, E extends Error> = (
  resolve: (result: T) => void,
  reject: (error: E) => void,
) => void

class _Promise<T, E extends Error> {
  constructor(f: _Executor<T, E>) {}
}

type Executor<T> = (
  resolve: (result: T) => void,
  reject: (error: unknown) => void,
) => void

class Promise<T> {
  private result?: T
  private isResolved: boolean = false
  constructor(f: Executor<T>) {}
  then<U>(g: (result: T) => Promise<U>): Promise<U> {
    return g(this.result)
  }
  catch<U>(g: (error: unknown) => Promise<U>): Promise<U> {
    return g(0)
  }
}

const promise: Promise<Buffer> = new Promise((resolve, reject) => {
  readFile('8-3.ts', null, (err, data) => {
    if (err) {
      return reject(err)
    }
    resolve(data)
  })
})

function businessLogic(item: any) {
  return item
}

promise
  .then((result) => {
    businessLogic(result) // 여기서 비즈니스 로직 짜고
    // 체이닝을 위한 값전달
    return new Promise((resolve, reject) => {
      resolve(result.toString())
    })
  })
  .catch((error) => {
    return new Promise((resolve, reject) => {
      reject(new Error('!'))
    })
  })

async function businessLogic2() {
  const result = await promise // T
}

async function businessLogic3() {
  try {
    const result = await promise.then((result: Buffer): Promise<string> => {
      businessLogic(result) // 비즈니스 로직 처리
      return new Promise((resolve) => resolve(result.toString())) // 새로운 `Promise<U>` 반환
    })
    console.log('Result:', result) // `U` 타입의 값 출력
  } catch (error) {
    console.log('Error occurred:', error)
  }
}