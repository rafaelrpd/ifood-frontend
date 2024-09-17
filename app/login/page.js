// app/login/page.js

'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Container, Form, Button, Alert } from 'react-bootstrap';

export default function LoginPage() {
  const [userInfo, setUserInfo] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      username: userInfo.username,
      password: userInfo.password,
    });

    if (res.error) {
      setError('Credenciais inválidas. Tente novamente.');
    } else {
      // Redireciona para o dashboard após login bem-sucedido
      router.push('/dashboard');
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: '400px' }}>
      <h1>Login</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu usuário"
            value={userInfo.username}
            onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={userInfo.password}
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Entrar
        </Button>
      </Form>
    </Container>
  );
}
