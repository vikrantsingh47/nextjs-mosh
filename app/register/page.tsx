'use client';
import React from 'react';

const RegisterUser = () => {
  const formSubmit = async (formData: FormData) => {
    const res = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    });
    // const data = await res.json();
    // console.log(data);
  };
  return (
    <>
      <form action={formSubmit}>
        <input type="text" name="name" placeholder="name"></input>
        <input type="text" name="email" placeholder="email"></input>
        <input type="password" name="password" placeholder="password"></input>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default RegisterUser;
