# React Hook Form

- 간단하고 효율적인 폼 관리 라이브러리로, 입력 상태를 따로 설정하지 않아도 쉽게 폼 데이터를 관리할 수 있다.

```bash
npm install react-hook-form
```

## 2. 기본 구조

- 가장 기본적인 폼을 예제로 만들어보자. 
- `useForm` 훅을 이용해 `register`, `handleSubmit`, `errors` 객체를 생성하는 게 핵심이야.

   ```javascript
   import React from 'react';
   import { useForm } from 'react-hook-form';

   function SimpleForm() {
     const { register, handleSubmit, formState: { errors } } = useForm();

     const onSubmit = (data) => {
       console.log(data);
     };

     return (
       <form onSubmit={handleSubmit(onSubmit)}>
         <div>
           <label>Username</label>
           <input {...register("username", { required: true })} />
           {errors.username && <p>This field is required</p>}
         </div>
         <button type="submit">Submit</button>
       </form>
     );
   }

   export default SimpleForm;
   ```

   - `register`: 각 input 요소를 관리하고, 폼 데이터에 연결해주는 메서드.
   - `handleSubmit`: 폼의 제출을 처리하고, `onSubmit` 함수를 실행하게 함.
   - `errors`: 각 필드의 유효성 검사를 도와주는 객체로, 필드에 오류가 있을 때 메시지를 출력할 수 있어.

## 3. 유효성 검사 추가하기
   더 많은 검증을 추가하여 예제를 확장해보자. 예를 들어, `minLength`와 같은 조건을 추가할 수 있어.

   ```javascript
   <input
     {...register("username", { required: true, minLength: 5 })}
   />
   {errors.username?.type === "required" && <p>This field is required</p>}
   {errors.username?.type === "minLength" && <p>Minimum length is 5</p>}
   ```

   - 필드에 여러 조건을 붙일 수 있어서 유효성 검사와 에러 처리가 간편해.

## 4. 폼 초기값 설정하기
   폼에 초기값을 설정할 때는 `defaultValues` 속성을 `useForm` 안에 설정해주면 돼.

   ```javascript
   const { register, handleSubmit, formState: { errors }, reset } = useForm({
     defaultValues: {
       username: "initialUsername",
     }
   });
   ```

## 5. 제어 컴포넌트와 비제어 컴포넌트
   React Hook Form은 비제어 컴포넌트 방식으로 폼 데이터를 처리해 최적화가 가능해. 만약 제어 컴포넌트를 사용하고 싶다면 `Controller` 컴포넌트를 이용할 수 있어.

   ```javascript
   import { Controller } from 'react-hook-form';

   <Controller
     name="controlledInput"
     control={control}
     defaultValue=""
     render={({ field }) => <input {...field} />}
   />
   ```

## 요약
React Hook Form은 `register`, `handleSubmit`, `errors`를 이용해 기본적인 폼을 간단하게 관리하고, 비제어 컴포넌트를 기본으로 해서 성능을 최적화해. 유효성 검사, 초기값 설정 등도 쉽게 적용할 수 있어서 편리한 폼 관리가 가능하지.


---

이제 추가적인 기능을 살펴보면서 더 복잡한 폼도 관리할 수 있는 방법을 알아볼게.

### 1. **useFieldArray**
   `useFieldArray`는 동적으로 필드 배열을 다룰 때 유용해. 예를 들어, 여러 개의 전화번호나 주소를 입력할 때 사용할 수 있어.

   ```javascript
   import { useForm, useFieldArray } from "react-hook-form";

   function DynamicForm() {
     const { register, control, handleSubmit } = useForm({
       defaultValues: {
         phones: [{ number: "" }]
       }
     });
     const { fields, append, remove } = useFieldArray({
       control,
       name: "phones"
     });

     const onSubmit = (data) => console.log(data);

     return (
       <form onSubmit={handleSubmit(onSubmit)}>
         {fields.map((field, index) => (
           <div key={field.id}>
             <input
               {...register(`phones.${index}.number`)}
               placeholder="Phone Number"
             />
             <button type="button" onClick={() => remove(index)}>
               Remove
             </button>
           </div>
         ))}
         <button type="button" onClick={() => append({ number: "" })}>
           Add Phone
         </button>
         <button type="submit">Submit</button>
       </form>
     );
   }

   export default DynamicForm;
   ```

   - `fields`: 배열 형태로 필드들을 관리해.
   - `append`: 새 필드를 추가.
   - `remove`: 특정 필드를 삭제.

### 2. **useFormContext**
   `useFormContext`는 상위 컴포넌트에서 선언한 `useForm`을 하위 컴포넌트에서도 사용할 수 있도록 해줘. 특히 큰 폼을 여러 컴포넌트로 나누어 관리할 때 유용해.

   ```javascript
   import { useForm, FormProvider, useFormContext } from "react-hook-form";

   function FormInput({ name }) {
     const { register } = useFormContext();
     return <input {...register(name)} />;
   }

   function MainForm() {
     const methods = useForm();

     const onSubmit = (data) => console.log(data);

     return (
       <FormProvider {...methods}>
         <form onSubmit={methods.handleSubmit(onSubmit)}>
           <FormInput name="firstName" />
           <FormInput name="lastName" />
           <button type="submit">Submit</button>
         </form>
       </FormProvider>
     );
   }

   export default MainForm;
   ```

   - `FormProvider`: `useFormContext`를 통해 폼 데이터와 메서드를 하위 컴포넌트로 전달.
   - `useFormContext`: 현재 폼 데이터를 접근하도록 도와줘.

### 3. **Control**
   `Control`은 `useFieldArray`와 `Controller` 같은 고급 메서드에 필요한 객체로, 폼의 상태와 메서드를 컨트롤하는 역할을 해.

   ```javascript
   import { useForm, Controller } from "react-hook-form";

   function ControlledInputForm() {
     const { control, handleSubmit } = useForm();

     const onSubmit = (data) => console.log(data);

     return (
       <form onSubmit={handleSubmit(onSubmit)}>
         <Controller
           name="controlledInput"
           control={control}
           defaultValue=""
           render={({ field }) => <input {...field} />}
         />
         <button type="submit">Submit</button>
       </form>
     );
   }

   export default ControlledInputForm;
   ```

   - `Controller`: 제어 컴포넌트를 사용할 때 `control`을 통해 데이터를 관리해.

### 4. **FieldValues**
   `FieldValues`는 TypeScript에서 폼 필드들의 타입을 표현하기 위한 기본 타입으로, 폼 데이터를 유연하게 정의할 수 있게 해줘.

   ```typescript
   import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

   function TypedForm() {
     const { register, handleSubmit } = useForm<FieldValues>();

     const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

     return (
       <form onSubmit={handleSubmit(onSubmit)}>
         <input {...register("username")} placeholder="Username" />
         <button type="submit">Submit</button>
       </form>
     );
   }

   export default TypedForm;
   ```

   - `FieldValues`: 각 필드의 타입을 표현할 수 있게 도와줘서, 타입 검사와 코드의 안전성을 높여.

---

### 핵심 요약
`useFieldArray`는 배열 필드를 동적으로 관리하고, `useFormContext`는 폼 컨텍스트를 컴포넌트들 사이에서 공유하며, `Control`은 `Controller`와 같은 고급 기능을 지원해줘. `FieldValues`는 TypeScript에서 필드들의 타입을 유연하게 관리할 때 사용해.

대본 스타일로 간결하게 설명하면서 자연스럽게 코드와 예시를 함께 들어볼게.

---

### **라디오 대본: React Hook Form 주요 메서드와 추가 기능 소개**

---

**DJ**: 반가워요, 여러분! 오늘은 React Hook Form의 주요 메서드와 몇 가지 유용한 추가 기능들까지 전해드릴게요. 폼 작업할 때 자주 만나게 될 친구들이죠. 시작할 준비 되셨나요? 자, 먼저 가장 기본적인 메서드부터 하나씩 만나봅시다.

---

#### **1. `useForm` - 기본 세팅**

**DJ**: 먼저 `useForm` 훅이에요. 모든 시작이 여기서부터라고 할 수 있어요. `useForm`을 호출하면 `register`, `handleSubmit`, `errors` 등 핵심 도구들이 나와요. 각각이 폼의 필드와 상태를 관리하는데, 예제로 한번 볼게요.

```javascript
import { useForm } from 'react-hook-form';

function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username", { required: true })} />
      {errors.username && <p>Username is required</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

**DJ**: 보셨죠? `register`는 input을 폼에 등록하고, `handleSubmit`은 제출할 때 `onSubmit` 콜백을 실행해요. 그리고 `errors`는 필드 유효성 검사를 도와주죠.

---

#### **2. `useFieldArray` - 필드 배열 다루기**

**DJ**: 이제 동적 필드를 다룰 때 유용한 `useFieldArray`를 살펴봅시다. 전화번호를 추가하거나 삭제해야 할 때 같은 상황에서 유용해요. 같이 코드 예시를 보죠.

```javascript
import { useForm, useFieldArray } from "react-hook-form";

function PhoneForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: { phones: [{ number: "" }] }
  });
  const { fields, append, remove } = useFieldArray({ control, name: "phones" });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`phones.${index}.number`)} placeholder="Phone" />
          <button type="button" onClick={() => remove(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => append({ number: "" })}>Add Phone</button>
      <button type="submit">Submit</button>
    </form>
  );
}
```

**DJ**: 이 `append`와 `remove` 메서드를 이용해 필드를 추가하거나 제거할 수 있어요. 필드 배열 다룰 때 정말 편리하죠?

---

#### **3. `useFormContext` - 폼을 여러 컴포넌트에서 공유하기**

**DJ**: 이제 좀 더 복잡한 폼을 다룰 때 유용한 `useFormContext`를 알아볼게요. 이 메서드는 폼 상태를 여러 컴포넌트에서 공유할 수 있도록 도와줘요. FormProvider와 함께 쓰이죠.

```javascript
import { useForm, FormProvider, useFormContext } from "react-hook-form";

function FormInput({ name }) {
  const { register } = useFormContext();
  return <input {...register(name)} />;
}

function ComplexForm() {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormInput name="firstName" />
        <FormInput name="lastName" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
```

**DJ**: 폼 데이터를 전달할 때는 `FormProvider`를 써서 상위에서 하위 컴포넌트로 전달해요. 이러면 컴포넌트를 나누면서도 폼 상태를 공유할 수 있죠.

---

#### **4. `Control` - Controller와 제어 컴포넌트**

**DJ**: `Control`은 폼 상태와 메서드를 제어하는 객체로, `Controller`를 사용할 때 꼭 필요해요. 주로 제어 컴포넌트에서 자주 만나죠.

```javascript
import { useForm, Controller } from "react-hook-form";

function ControlledForm() {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="controlledInput"
        control={control}
        render={({ field }) => <input {...field} />}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**DJ**: `Controller`를 사용하면 직접 제어 컴포넌트를 다루기 편리해요. `render` 안에 input을 정의하면서 폼과 연결할 수 있죠.

---

#### 5. `FieldValues` - 폼 필드 타입 설정

**DJ**: 마지막으로 `FieldValues`를 짚어볼게요. `FieldValues`는 TypeScript에서 폼 필드의 타입을 설정해줘요. 코드 안정성과 타입 검사를 위해 활용할 수 있죠.

```typescript
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";

function TypedForm() {
  const { register, handleSubmit } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="Username" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

**DJ**: 타입을 지정해 주면서 안정성을 높이고, 폼의 필드에 타입을 명확하게 지정할 수 있어요.

---

**마무리**: 오늘 React Hook Form의 주요 메서드를 다루어봤어요! `useForm`으로 기본 폼을 세팅하고, `useFieldArray`로 동적 배열을 관리하며, `useFormContext`로 폼 상태를 공유하고, `Control`로 제어 컴포넌트를 관리하고, `FieldValues`로 타입까지 완벽하게 설정할 수 있죠.

여기까지 듣고 나니 이제 조금 폼 작업이 쉬워지겠죠?