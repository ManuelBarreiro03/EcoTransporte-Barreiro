import { useState } from 'react';
import { Home } from './components/Home';
import { PlanificadorRuta } from './components/PlanificadorRuta';
import { PlanificadorRutaTabla } from './components/PlanificadorRutaTabla';
import { GestionFlotas } from './components/GestionFlotas';
import { MantenimientoFlota } from './components/MantenimientoFlota';
import { Vehiculos } from './components/Vehiculos';
import { Sidebar } from './components/Sidebar';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {currentPage === 'home' && <Home />}
        {currentPage === 'planificador-ruta' && <PlanificadorRuta />}
        {currentPage === 'planificador-ruta-tabla' && <PlanificadorRutaTabla />}
        {currentPage === 'gestion-flotas' && <GestionFlotas />}
        {currentPage === 'mantenimiento' && <MantenimientoFlota />}
        {currentPage === 'vehiculos' && <Vehiculos />}
      </main>
    </div>
  );
}
