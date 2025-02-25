"use client";
// components/ResumenCompra.js
import React from 'react';

const ResumenCompra = ({ asientosSeleccionados, total, eliminarAsiento }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">Resumen de Compra</h3>
        <ul className="list-group">
          {asientosSeleccionados.map((asiento) => (
            <li key={asiento.id} className="list-group-item d-flex justify-content-between align-items-center">
              Asiento: {asiento.id}
              <button className="btn btn-danger btn-sm" onClick={() => eliminarAsiento(asiento.id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <h4 className="mt-3">Total: ${total}</h4>
      </div>
    </div>
  );
};

export default ResumenCompra;