interface Vector2D {
  x: number
  y: number
}

interface NamedVector {
  name: string
  x: number
  y: number
}

interface Vector3D {
  x: number
  y: number
  z: number
}

function calcLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y)
}

function normalize(v: Vector3D) {
  const length = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z)
  const length2 = calcLength(v)

  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  }
}

normalize({ x: 3, y: 4, z: 5 })

function calcLengthL1(v: Vector3D) {
  let length = 0
  for (const axis of Object.keys(v)) {
    const coord = v[axis]
    // Error:
    length += Math.abs(coord)
  }
  return length
}

class C {
  foo: string
  constructor(foo: string) {
    this.foo = foo
  }
}
const c = new C('real instance of C')
const d: C = { foo: 'object literal' } // 오류 없음

class CC {
  foo: string
  bar: string

  constructor(foo: string) {
    this.foo = foo
    // 생성자에 연산 로직 추가
    this.bar = foo.toUpperCase() // foo 값을 대문자로 변환하여 bar에 저장
  }
}

const cc: CC = new CC('real instance of C')
console.log(cc.bar) // 'REAL INSTANCE OF C'

// 객체 리터럴로 할당
const dd: CC = { foo: 'object literal', bar: 'OBJECT LITERAL' }
console.log(dd.bar) // 'OBJECT LITERAL' (하지만 생성자 로직을 거치지 않았기 때문에 직접 설정해야함)
