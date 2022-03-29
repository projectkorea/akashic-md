
### 5. form data `destructuring`으로 받아오기

```js
const [form, setForm] = useForm({...})
const onChange = ( { target: { name, value }} ) 
=> setForm({ ...form, [name]: value });
```
- `event` 인자의 `target`을 구조분해하여 `{ target: { name, value }}`로 바로 받아왔다.
- `const name = event.target.name`
- `const value = event.target.value`

