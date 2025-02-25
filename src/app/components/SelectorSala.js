// components/SelectorSala.js
import React from 'react';

const SelectorSala = ({ salas, seleccionarSala, salaSeleccionada }) => {
  return (
    <div className="selector-sala">
      <h2>Selecciona una Sala</h2>
      <div className="btn-group" role="group">
        {salas.map((sala) => (
          <button
            key={sala.id}
            className={`btn ${salaSeleccionada.id === sala.id ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => seleccionarSala(sala.id)}
          >
            {sala.nombre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectorSala;