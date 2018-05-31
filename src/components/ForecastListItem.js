import React, {Component} from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'

export default class ForecastListItem extends Component{

    constructor(props){
        super(props)

        this.state = {
            dayOfWeek: "Lunes"
        }

        this.getDayOfWeek = this.getDayOfWeek.bind(this)
    }

    componentDidMount(){
        this.getDayOfWeek()
    }

    getDayOfWeek(){
        const date = new Date(this.props.data.timestamp*1000)
        const day = date.getDay() 
        switch(day){
            case 0: this.setState({dayOfWeek: "Domingo"}); break;
            case 1: this.setState({dayOfWeek: "Lunes"}); break;
            case 2: this.setState({dayOfWeek: "Martes"}); break;
            case 3: this.setState({dayOfWeek: "Miércoles"}); break;
            case 4: this.setState({dayOfWeek: "Jueves"}); break;
            case 5: this.setState({dayOfWeek: "Viernes"}); break;
            case 6: this.setState({dayOfWeek: "Sábado"}); break;
            default: this.setState({dayOfWeek: "Domingo"}); break;
        }
    }

    getClassNameKeys(){
        const baseClasses = "ForecastListItem"
    
        switch(this.props.data.icon){
          case "01d": return baseClasses.concat(" clear-sky")
          case "02d": return baseClasses.concat(" few-clouds")
          case "03d": return baseClasses.concat(" scattered-clouds")
          case "04d": return baseClasses.concat(" broken-clouds")
          case "09d": return baseClasses.concat(" shower-rain")
          case "10d": return baseClasses.concat(" rain")
          case "11d": return baseClasses.concat(" thunderstorm")
          case "13d": return baseClasses.concat(" snow")
          case "50d": return baseClasses.concat(" mist")
          case "01n": return baseClasses.concat(" clear-sky-night")
          case "02n": return baseClasses.concat(" few-clouds-night")
          case "03n": return baseClasses.concat(" scattered-clouds-night")
          case "04n": return baseClasses.concat(" broken-clouds-night")
          case "09n": return baseClasses.concat(" shower-rain-night")
          case "10n": return baseClasses.concat(" rain-night")
          case "11n": return baseClasses.concat(" thunderstorm-night")
          case "13n": return baseClasses.concat(" snow-night")
          case "50n": return baseClasses.concat(" mist-night")
          default: return baseClasses.concat(" clear-sky") 
        }
    
      }

    render(){

        const icon = "http://openweathermap.org/img/w/" + this.props.data.icon + ".png"
        const classNames = this.getClassNameKeys()


        return(
            <div className={classNames}>
                <Grid>
                    <Row>
                        <Col xs={12}><h5>{this.state.dayOfWeek}</h5></Col>
                        <Col xs={12}><Image src={icon} responsive/></Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}