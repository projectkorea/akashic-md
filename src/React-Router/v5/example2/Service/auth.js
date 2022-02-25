import { db } from './userData';

export const loginUser = (formData) => {
  const { email, password } = formData;
  return db.users.find(
    (user) => user.email === email && user.password === password
  );
};

export const registerUser = ({ email, password }) => {
  db.users.push({ email, password });
};

export const getUser = (userId) => {
  return db.users.find((user) => user.id === userId);
};
