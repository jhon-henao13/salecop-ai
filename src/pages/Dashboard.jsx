import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-salecop-cream p-8">
      <h1 className="text-3xl font-bold text-salecop-black">Bienvenido, {user?.email}</h1>
      <p className="text-salecop-charcoal">Aquí irán tus métricas y herramientas de IA.</p>
      {/* Aquí construirás el resto del dashboard */}
    </div>
  );
};

export default Dashboard;