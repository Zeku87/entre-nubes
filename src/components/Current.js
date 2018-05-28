import React, {Component} from 'react';
import {Image, Grid, Row, Col} from 'react-bootstrap';

export default class Current extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            iconUrlBase : "http://openweathermap.org/img/w/"
        }
    }

    kelvinToCentigrade(kelvin){
      return kelvin - 273.15;   
    }

    render(){
            const icon = this.state.iconUrlBase.concat(this.props.weather.icon,".png");
            console.log("ICON",icon);
            return(
                <div className="Current">
                    <Image className="Current_icon" src={icon} responsive/>
                    <Grid>
                        <Row>
                            <Col xs={6}>{this.kelvinToCentigrade(this.props.weather.tempMax)}º / {this.kelvinToCentigrade(this.props.weather.tempMin)}º</Col>
                            <Col xs={6}>{this.props.weather.conditions}</Col>
                        </Row>
                    </Grid>
                </div>
            );
        }

}