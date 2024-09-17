// app/transactions/page.js

'use client';

import { useEffect, useState } from 'react';
import { Container, Table, Form, Button } from 'react-bootstrap';
import transactionsData from '../data/transactions';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setTransactions(transactionsData);
  }, []);

  const handleSearch = () => {
    const filtered = transactionsData.filter((transaction) =>
      transaction.description.toLowerCase().includes(search.toLowerCase())
    );
    setTransactions(filtered);
  };

  return (
    <Container className="mt-4">
      <h1>Transações</h1>
      <Form className="my-3" onSubmit={(e) => e.preventDefault()}>
        <Form.Control
          type="text"
          placeholder="Buscar por descrição"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="primary" className="mt-2" onClick={handleSearch}>
          Buscar
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((trans) => (
            <tr key={trans.id}>
              <td>{trans.date}</td>
              <td>{trans.description}</td>
              <td>{`R$ ${trans.amount.toFixed(2)}`}</td>
              <td>{trans.type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
