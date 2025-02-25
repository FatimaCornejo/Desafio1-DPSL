// pages/index.js
"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css'; // Importa tu archivo CSS global

import React, { useState } from 'react';
import SalaCine from './components/SalaCine';
import ResumenCompra from './components/ResumenCompra';
import SelectorSala from './components/SelectorSala';

const salasData = [
    { id: 1, nombre: 'Sala 1', asientos: Array.from({ length: 10 }, (_, i) => ({ id: i + 1, disponible: true })) },
    { id: 2, nombre: 'Sala 2', asientos: Array.from({ length: 10 }, (_, i) => ({ id: i + 1, disponible: true })) },
  ];
  
  const Home = () => {
    const [salas] = useState(salasData);
    const [salaSeleccionada, setSalaSeleccionada] = useState(salas[0]);
    const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);
    const [total, setTotal] = useState(0);
  
    const seleccionarSala = (id) => {
      const sala = salas.find((s) => s.id === id);
      setSalaSeleccionada(sala);
      setAsientosSeleccionados([]); // Reiniciar selección al cambiar de sala
      setTotal(0); // Reiniciar total al cambiar de sala
    };

  const seleccionarAsiento = (id) => {
    const asiento = salaSeleccionada.asientos.find((a) => a.id === id);
    if (asiento.disponible) {
      setAsientosSeleccionados((prevAsientos) => [...prevAsientos, asiento]);
      setTotal((prevTotal) => prevTotal + 10); // Asumimos que cada asiento cuesta $10
      salaSeleccionada.asientos = salaSeleccionada.asientos.map((a) => (a.id === id ? { ...a, disponible: false } : a));
      setSalaSeleccionada({ ...salaSeleccionada });
    }
  };

  const eliminarAsiento = (id) => {
    setAsientosSeleccionados((prevAsientos) => prevAsientos.filter((a) => a.id !== id));
    setTotal((prevTotal) => prevTotal - 10); // Asumimos que cada asiento cuesta $10
    salaSeleccionada.asientos = salaSeleccionada.asientos.map((a) => (a.id === id ? { ...a, disponible: true } : a));
    setSalaSeleccionada({ ...salaSeleccionada });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Reserva de Asientos de Cine</h1>
      <div className="row">
        <div className="col-md-8">
          <SalaCine asientos={salaSeleccionada.asientos} seleccionarAsiento={seleccionarAsiento} />
        </div>
        <div className="col-md-4">
          <ResumenCompra asientosSeleccionados={asientosSeleccionados} total={total} eliminarAsiento={eliminarAsiento} />
          <SelectorSala salas={salas} seleccionarSala={seleccionarSala} salaSeleccionada={salaSeleccionada} />
        </div>
      </div>
    </div>
  );
};

export default Home;