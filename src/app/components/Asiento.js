// components/Asiento.js
const Asiento = ({ asiento, seleccionarAsiento }) => {
    const handleClick = () => {
        seleccionarAsiento(asiento.id);
    };

    return (
        <button
          className={`btn ${asiento.disponible ? 'btn-success' : 'btn-secondary'} m-1`}
          onClick={() => asiento.disponible && seleccionarAsiento(asiento.id)}
          disabled={!asiento.disponible}
        >
          {asiento.id}
        </button>
      );
};

export default Asiento;