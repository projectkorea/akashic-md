const [form, setForm] = useForm({...})
const onChange = ( { target: { name, value }} ) 
setForm({ ...form, [name]: value });

