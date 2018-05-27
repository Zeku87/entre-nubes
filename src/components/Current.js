import React, {Component} from 'react';
import {Image, Grid, Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchWeather} from '../redux/actions/items'

class Current extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            iconUrlBase : "http://openweathermap.org/img/w/"
        }
    }

    componentDidMount(){
        const latitude = "36.5271";
        const longitude = "6.2886"
        const appid = "ac40fa4914a844cbb43379bcbab81383"; 
        const url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + appid;    
        
        this.props.fetchData(url);
    
    }


    kelvinToCentigrade(kelvin){
      return kelvin - 273.15;   
    }

    render(){
        if(this.props.hasErrored)
        {
            return(
                <div className="Current">
                    <p>Algo va mal...</p>
                </div>
            );
        }
        if(this.props.isLoading)
        {
            return(
                <div className="Current">
                    <p>Cargando...</p>
                </div>
            );
        }   
        
        if(this.props.weatherConditions.length > 0)
        {
            const icon = this.state.iconUrlBase.concat(this.props.weatherConditions[0],".png");
            console.log("ICON",icon);
            return(
                <div className="Current">
                    <Image className="Current_icon" src={icon} responsive/>
                    <Grid>
                        <Row>
                            <Col xs={6}>{this.kelvinToCentigrade(this.props.weatherConditions[2])}º / {this.kelvinToCentigrade(this.props.weatherConditions[3])}º</Col>
                            <Col xs={6}>{this.props.weatherConditions[1]}</Col>
                        </Row>
                    </Grid>
                </div>
            );
        }

        return <p>NADA</p>;
    }
}

const mapStateToProps = (state) => {
    return{
        weatherConditions: state.weatherConditions,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {fetchData : (url) => dispatch(fetchWeather(url))};
}

export default connect(mapStateToProps, mapDispatchToProps)(Current);