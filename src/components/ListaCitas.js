import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({ citas, deleteDate }) => {
    //imprime un mensaje si hay citas o no
    const message =
        Object.keys(citas).length === 0
            ? 'No hay citas creadas'
            : 'Administra las citas aquí';

    return (
        <div className='card mt-2 py-5'>
            <div className='card-body'>
                <h2 className='card-title text-center'>{message}</h2>
                <div className='lista-citas'>
                    {citas.map(cita => (
                        <Cita
                            key={cita.id}
                            cita={cita}
                            deleteDate={deleteDate}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    deleteDate: PropTypes.func.isRequired
};

export default ListaCitas;
