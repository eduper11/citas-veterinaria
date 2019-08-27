import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';


const initialState = {
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
};

class NuevaCita extends Component {
    state = { ...initialState };

    //cuando el usuario escribe en los inputs
    handleChange = event => {
        //colocar lo que el usuario escribe en el state
        this.setState({
            cita: {
                ...this.state.cita,
                [event.target.name]: event.target.value
            }
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        //extraer los valores del state
        const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
        //validar todos los campos estén required
        if (
            mascota === '' ||
            propietario === '' ||
            fecha === '' ||
            hora === '' ||
            sintomas === ''
        ) {
            this.setState({ error: true });

            //detener la ejecución de la function

            return;
        }

        //generar objetos con los datos
        const newDate = { ...this.state.cita };
        newDate.id = uuid();

        //Agregar la cita al state

        this.props.createNewDate(newDate);

        //colocar el state inicial

        this.setState({
            ...initialState
        });
    };

    render() {
        const { error } = this.state;
        return (
            <div className='card-body'>
                <h2 className='card-title text-center mb-5'>
                    Llena el formulario para crear una nueva cita
                </h2>

                {error ? (
                    <div className='alert alert-danger mt-2 mb-5 text-center'>
                        Todos los campos son obligatorios
                    </div>
                ) : null}

                <form onSubmit={this.handleSubmit}>
                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-2 col-form-label'>
                            Nombre Mascota
                        </label>
                        <div className='col-sm-8 col-lg-10'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Nombre Mascota'
                                name='mascota'
                                onChange={this.handleChange}
                                value={this.state.cita.mascota}
                            />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-2 col-form-label'>
                            Nombre Dueño
                        </label>
                        <div className='col-sm-8 col-lg-10'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Nombre propietario'
                                name='propietario'
                                onChange={this.handleChange}
                                value={this.state.cita.propietario}
                            />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-2 col-form-label'>
                            Fecha de entrada
                        </label>
                        <div className='col-sm-8 col-lg-4'>
                            <input
                                type='date'
                                className='form-control'
                                placeholder='Fecha de entrada'
                                name='fecha'
                                onChange={this.handleChange}
                                value={this.state.cita.fecha}
                            />
                        </div>
                        <label className='col-sm-4 col-lg-2 col-form-label'>
                            Hora de entrada
                        </label>
                        <div className='col-sm-8 col-lg-4'>
                            <input
                                type='time'
                                className='form-control'
                                placeholder='Hora de entrada'
                                name='hora'
                                onChange={this.handleChange}
                                value={this.state.cita.hora}
                            />
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label className='col-sm-4 col-lg-2 col-form-label'>
                            Síntomas
                        </label>
                        <div className='col-sm-8 col-lg-10'>
                            <textarea
                                className='form-control'
                                placeholder='Describe los síntomas'
                                name='sintomas'
                                onChange={this.handleChange}
                                value={this.state.cita.sintomas}
                            ></textarea>
                        </div>
                    </div>
                    <input
                        type='submit'
                        className='py-3 mt-2 col-sm-4 btn btn-success btn-block mx-auto'
                        value='Agregar Nueva Cita'
                    />
                </form>
            </div>
        );
    }
}

NuevaCita.propTypes = {
    createNewDate = PropTypes.func.isRequired
}

export default NuevaCita;
