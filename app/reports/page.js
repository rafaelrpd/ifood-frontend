// app/reports/page.js

'use client';

import { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import reports from '../data/reports';

export default function ReportsPage() {
  const [reportData, setReportData] = useState({});

  useEffect(() => {
    setReportData(reports);
  }, []);

  const handleExport = () => {
    // Função para exportar relatório em PDF ou Excel
    alert('Relatório exportado com sucesso!');
  };

  return (
    <Container className="mt-4">
      <h1>Relatórios Financeiros</h1>
      <div className="my-4">
        <p>Total de Receitas: R$ {reportData.totalRevenue?.toFixed(2)}</p>
        <p>Total de Despesas: R$ {reportData.totalExpenses?.toFixed(2)}</p>
        <p>Lucro Líquido: R$ {reportData.netProfit?.toFixed(2)}</p>
      </div>
      <Button variant="success" onClick={handleExport}>
        Exportar Relatório
      </Button>
    </Container>
  );
}
