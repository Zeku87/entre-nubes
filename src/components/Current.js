import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchWeatherIcon} from '../redux/actions/items'

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
        
        if(this.props.weatherIcon)
        {
            const icon = this.state.iconUrlBase.concat(this.props.weatherIcon,".png");
            console.log("ICON",icon);
            return(
                <div className="Current">
                    <Image className="Current_icon" src={icon} responsive/>
                </div>
            );
        }

        return <p>NADA</p>;
    }
}

const mapStateToProps = (state) => {
    return{
        weatherIcon: state.weatherIcon,
        hasErrored: state.hasErrored,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {fetchData : (url) => dispatch(fetchWeatherIcon(url))};
}

export default connect(mapStateToProps, mapDispatchToProps)(Current);