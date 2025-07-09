function wrapValue<T>(value: T): { wrapped: T; isString: boolean } {
  // T가 string인지 여부를 판단하여 추가 정보 제공
  const isString = typeof value === 'string'
  return { wrapped: value, isString }
}

const wrappedString = wrapValue('Hello')
console.log(wrappedString) // { wrapped: "Hello", isString: true }

const wrappedNumber = wrapValue(42)
console.log(wrappedNumber) // { wrapped: 42, isString: false }

// 제네릭을 사용한 유효성 검사 함수
function validateForm<T>(formData: T, requiredFields: (keyof T)[]): boolean {
  for (const field of requiredFields) {
    if (!formData[field]) {
      console.log(`Missing field: ${String(field)}`)
      return false
    }
  }
  return true
}

// 사용 예시 1: 로그인 폼 유효성 검사
interface LoginForm {
  username: string
  password: string
}

const loginForm: LoginForm = {
  username: 'john_doe',
  password: '',
}

const isLoginValid = validateForm<LoginForm>(loginForm, [
  'username',
  'password',
])
console.log(isLoginValid) // false, password가 비어있기 때문에

// 사용 예시 2: 회원가입 폼 유효성 검사
interface SignupForm {
  username: string
  password: string
  email: string
}

const signupForm: SignupForm = {
  username: 'jane_doe',
  password: 'password123',
  email: 'jane@example.com',
}

const isSignupValid = validateForm<SignupForm>(signupForm, [
  'username',
  'password',
  'email',
])
console.log(isSignupValid) // true
