"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <form 
      className='flex flex-col justify-center items-center text-white' 
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col mt-8 mb-8'>
        <label className='text-xl mb-2' htmlFor="email">E-mail:</label>
        <input 
          className='submit'
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='flex flex-col'>
        <label className='text-xl mb-2' htmlFor="password">Senha:</label>
        <input 
          className='submit'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='flex justify-start w-64'>
        <Link className='hover:underline' href="">Esqueci minha senha</Link>
      </div>
      <div className='mt-4'>
        <input 
          className='border rounded-lg border-white w-64 h-12 font-bebas text-5xl cursor-pointer hover:scale-110 duration-500'
          style={{ backgroundColor: '#605EDB', borderColor: '#605EDB' }}
          type="submit" 
          value="Entrar" 
        />
      </div>
    </form>
  );
}
