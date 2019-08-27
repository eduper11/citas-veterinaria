import React from 'react';

const Cita = ({ cita, deleteDate }) => (
    <div className='media mt-3'>
        <div className='media-body'>
            <h3 className='mt-0'>{cita.mascota}</h3>
            <p className='card-text'>
                <span>Nombre Dueño: </span> {cita.propietario}
            </p>
            <p className='card-text'>
                <span>Fecha: </span> {cita.fecha}
            </p>
            <p className='card-text'>
                <span>Hora: </span> {cita.hora}
            </p>
            <p className='card-text'>
                <span>Síntomas: </span>
            </p>
            <p className='card-text'> {cita.sintomas}</p>

            <button
                className='btn btn-danger'
                onClick={() => deleteDate(cita.id)}
            >
                Borrar &times;
            </button>
        </div>
    </div>
);

export default Cita;
