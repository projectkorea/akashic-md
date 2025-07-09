interface a {
  a: string
}

interface c {
  c: string
}

interface A {
  a: string
  b: number
}

interface B {
  b: number
  c: Date
}

type intersection = A & B
// { a: string, b: number } & { b: number, c: Date } => { a: string, b: number, c: Date }
type keyOfIntersection = keyof (A & B)
// keyof { a: string, b: number, c: Date } => 'a' | 'b' | 'c'

type union = A | B
// { a: string, b: number } | { b: number, c: Date } => { a: string, b: number } | { b: number, c: Date }
type keyOfUnion = keyof (A | B)
// keyof ({ a: string, b: number } | { b: number, c: Date }) => 'b'
// 유니온 타입에서 keyof는 공통된 키만을 추출하기 때문에, A와 B의 공통 키는 b입니다. 그래서 keyOfUnion은 "b"가 됩니다.

//
//
//
// 사용 예시
function getCommonProperty(obj: A | B, key: keyOfUnion): number {
  return obj[key] // 'b' 속성에만 접근 가능
}

// A 타입 객체
const aObj: A = {
  a: 'hello',
  b: 42,
}

// B 타입 객체
const bObj: B = {
  b: 42,
  c: new Date(),
}

console.log(getCommonProperty(aObj, 'a')) // Error: Property 'a' does not exist on type keyof( 'A | B')
console.log(getCommonProperty(bObj, 'b')) // 42

export default A
// 파일이 모듈로 인식되려면 import나 export 구문이 반드시 있어야 합니다.
// 그렇지 않으면 해당 파일은 전역 스코프를 가진 스크립트로 간주됩니다.
