import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
    state = {
        citas: []
    };

    //Cuando la aplicación carga
    componentDidMount() {
        const citasLS = localStorage.getItem('citas');
        if (citasLS) {
            this.setState({
                citas: JSON.parse(citasLS)
            });
        }
    }

    //Cuando eliminamos o agregamos nueva cita

    componentDidUpdate() {
        localStorage.setItem('citas', JSON.stringify(this.state.citas));
    }

    createNewDate = data => {
        const citas = [...this.state.citas, data];
        this.setState({
            citas
        });
    };

    //elimina las citas del state

    deleteDate = id => {
        //tomamos copia del state

        const actualDates = [...this.state.citas];
        //utilizar filter para sacar el elemento @id del array
        const dates = actualDates.filter(date => date.id !== id);
        //actualizar el state

        this.setState({
            citas: dates
        });
    };

    render() {
        return (
            <div className='container'>
                <Header titulo='Administrador pacientes veterinaria' />
                <div className='row'>
                    <div className='col-md-10 mx-auto'>
                        <NuevaCita createNewDate={this.createNewDate} />
                    </div>
                    <div className='mt-5 col-md-10 mx-auto'>
                        <ListaCitas
                            citas={this.state.citas}
                            deleteDate={this.deleteDate}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
