import React, {Component} from 'react'
import {Image, Grid, Row, Col} from 'react-bootstrap'
import i01d from "../assets/img/01d.png"
import i02d from "../assets/img/02d.png"
import i03d from "../assets/img/03d.png"
import i04d from "../assets/img/04d.png"
import i09d from "../assets/img/09d.png"
import i10d from "../assets/img/10d.png"
import i11d from "../assets/img/11d.png"
import i13d from "../assets/img/13d.png"
import i50d from "../assets/img/50d.png"
import i01n from "../assets/img/01n.png"
import i02n from "../assets/img/02n.png"
import i03n from "../assets/img/03n.png"
import i04n from "../assets/img/04n.png"
import i09n from "../assets/img/09n.png"
import i10n from "../assets/img/10n.png"
import i11n from "../assets/img/11n.png"
import i13n from "../assets/img/13n.png"
import i50n from "../assets/img/50n.png"

export default class Current extends Component{

   constructor(props)
    {
        super(props)

        this.kelvinToCentigrade = this.kelvinToCentigrade.bind(this)
        this.getIcon = this.getIcon.bind(this)
        
    }

    kelvinToCentigrade(kelvin){
      return Math.round(kelvin - 273.15)  
    }

    getIcon(){
        switch(this.props.weather.icon){
            case "01d": return i01d
            case "02d": return i02d
            case "03d": return i03d
            case "04d": return i04d
            case "09d": return i09d
            case "10d": return i10d
            case "11d": return i11d
            case "13d": return i13d
            case "50d": return i50d
            case "01n": return i01n
            case "02n": return i02n
            case "03n": return i03n
            case "04n": return i04n
            case "09n": return i09n
            case "10n": return i10n
            case "11n": return i11n
            case "13n": return i13n
            case "50n": return i50n
            default: return i01d
        }
    }

    render(){
            const icon = this.getIcon()
            console.log("ICON CODE",this.props.weather.icon)
            return(
                <div className="Current container-fluid">
                    <Image className="Current_icon" src={icon} responsive/>
                    <Grid>
                        <Row>
                            <Col className="Current_temp" xs={6}>
                                <h2 className="Current_temp_max">{this.kelvinToCentigrade(this.props.weather.tempMax)}º /</h2>
                                <h5 className="Current_temp_min">{this.kelvinToCentigrade(this.props.weather.tempMin)}º</h5>
                            </Col>
                            <Col className="Current_conditions" xs={6}>{this.props.weather.conditions}</Col>
                        </Row>
                    </Grid>
                </div>
            )
        }

}