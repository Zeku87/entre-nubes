import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default class NowDate extends Component{
    constructor(props){
        super(props);

        this.state={
            fecha:0,
            hora:0,
            minutos:0,
            segundos:0
        }

        this.mostrarHora = this.mostrarHora.bind(this)
        this.mostrarFecha = this.mostrarFecha.bind(this)
    }

    mostrarHora(){
        const fecha = new Date()
        const hora = fecha.getHours()
        const minutos = fecha.getMinutes()
        const segundos = fecha.getSeconds()

        this.setState({
            hora,
            minutos,
            segundos
        })

        return <p>{hora}:{minutos}:{segundos}</p>;
    }

    mostrarFecha(){
        const fecha = new Date()
        const dia = fecha.getDate()
        const mes = this.obtenerMes(fecha.getMonth())
        return <h3>{dia} {mes}</h3>
    }

    obtenerMes(mes){
        switch(mes){
            case 0 : return 'ENE';
            case 1 : return 'FEB';
            case 2 : return 'MAR';
            case 3 : return 'ABR';
            case 4 : return 'MAY';
            case 5 : return 'JUN';
            case 6 : return 'JUL';
            case 7 : return 'AGO';
            case 8 : return 'SEP';
            case 9 : return 'OCT';
            case 10 : return 'NOV';
            case 11 : return 'DIC';
            default : return 'ZZZ';
        }
    }

    componentDidMount(){
        this.timer = setInterval(()=>this.mostrarHora(), 1000)
    }

    getDigitalFormat(){
        let hora = this.state.hora
        let minutos = this.state.minutos
        let segundos = this.state.segundos

        if(this.state.hora < 10)
            hora = "0" + this.state.hora
        if(this.state.minutos < 10)
            minutos = "0" + this.state.minutos
        if(this.state.segundos < 10)
            segundos = "0" + this.state.segundos
            
        return <h2>{hora}:{minutos}:{segundos}</h2>
    }

    render(){
        return(
            <div className="container-fluid">
                <Grid>
                    <Row>
                        <Col className="NowDate_time" xs={6}>
                            {this.getDigitalFormat()}
                        </Col>
                        <Col className="NowDate_date" xs={6}>
                            {this.mostrarFecha()}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
        
    
}