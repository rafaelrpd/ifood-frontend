// app/dashboard/page.js

'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import reports from '../data/reports';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (status === 'loading') return; // Aguarda o carregamento
    if (!session) {
      router.push('/login');
    } else {
      // Usuário autenticado, carregue os dados
      setData([
        { name: 'Receitas', value: reports.totalRevenue },
        { name: 'Despesas', value: reports.totalExpenses },
      ]);
    }
  }, [session, status, router]);

  if (!session) {
    return null; // Ou um indicador de carregamento
  }

  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <Container className="mt-4">
      <h1>Dashboard Financeiro</h1>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Resumo Financeiro</Card.Title>
              <p>Saldo Atual: R$ {reports.netProfit.toFixed(2)}</p>
              <p>Total de Receitas: R$ {reports.totalRevenue.toFixed(2)}</p>
              <p>Total de Despesas: R$ {reports.totalExpenses.toFixed(2)}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <PieChart width={400} height={400}>
            <Pie data={data} dataKey="value" nameKey="name" outerRadius={80}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Col>
      </Row>
    </Container>
  );
}
