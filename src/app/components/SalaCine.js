// components/SalaCine.js
import React from 'react';
import Asiento from './Asiento';

const SalaCine = ({ asientos, seleccionarAsiento }) => {
  return (
    <div className="sala-cine">
      <h2>Sala de Cine</h2>
      <div className="asientos">
        {asientos.map((asiento) => (
          <Asiento key={asiento.id} asiento={asiento} seleccionarAsiento={seleccionarAsiento} />
        ))}
      </div>
    </div>
  );
};

export default SalaCine;