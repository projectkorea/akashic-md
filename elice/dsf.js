const Form = () => {
  const formState = {};

  function register(name, validator = (value) => true) {
    formState[name] = { value: '', validator };
  }

  function validate() {
    return Object.values(formState).reduce(
      (flag, { value, validator }) => validator(value) && flag,
      true
    );
  }
  function getFormData() {
    return Object.entries(formState).reduce((formData, item) => {
      const [key, { value, validator }] = item;
      formData[key] = value;
      return formData;
    }, {});
  }
  function setValue(name, value) {
    formState[name] = { ...formState[name], value };
  }
  return {
    register,
    validate,
    getFormData,
    setValue,
  };
};

export default Form;
