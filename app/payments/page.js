// app/payments/page.js

'use client';

import { useEffect, useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import paymentsData from '../data/payments';

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [show, setShow] = useState(false);
  const [newPayment, setNewPayment] = useState({ date: '', amount: '', status: 'Pendente' });

  useEffect(() => {
    setPayments(paymentsData);
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddPayment = () => {
    setPayments([...payments, { id: payments.length + 1, ...newPayment }]);
    setShow(false);
  };

  return (
    <Container className="mt-4">
      <h1>Pagamentos e Recebíveis</h1>
      <Button variant="primary" className="my-3" onClick={handleShow}>
        Novo Pagamento
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Data</th>
            <th>Valor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((pay) => (
            <tr key={pay.id}>
              <td>{pay.date}</td>
              <td>{`R$ ${pay.amount.toFixed(2)}`}</td>
              <td>{pay.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal para novo pagamento */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Novo Pagamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="paymentDate">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                value={newPayment.date}
                onChange={(e) => setNewPayment({ ...newPayment, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="paymentAmount">
              <Form.Label>Valor</Form.Label>
              <Form.Control
                type="number"
                value={newPayment.amount}
                onChange={(e) => setNewPayment({ ...newPayment, amount: parseFloat(e.target.value) })}
              />
            </Form.Group>
            <Form.Group controlId="paymentStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={newPayment.status}
                onChange={(e) => setNewPayment({ ...newPayment, status: e.target.value })}
              >
                <option>Pendente</option>
                <option>Pago</option>
                <option>Cancelado</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" className="mt-3" onClick={handleAddPayment}>
              Adicionar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
