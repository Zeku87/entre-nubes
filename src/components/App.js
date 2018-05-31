import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../redux/actions/items'

import NowDate from './NowDate'
import Current from './Current'
import Location from './Location'
import ForecastList from './ForecastList'

import './App.css'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      url : "http://api.openweathermap.org/data/2.5/forecast?lat="
    }

    this.getClassNameKeys = this.getClassNameKeys.bind(this)
  
  }

  componentDidMount(){
    this.props.fetch(this.state.url)
  }

  getClassNameKeys(){
    const baseClasses = "App container-fluid"

    switch(this.props.weather.icon){
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

  render() {

    const classNames = this.getClassNameKeys()

    if(this.props.isLoading){
     return( 
        <div>
          <p>Loading</p>
          <NowDate/>
        </div>
     )

    }
    if(this.props.weather){
      return (
      <div>  
        <div className={classNames}>
          <NowDate/>
          <Current weather={this.props.weather}/>
          <Location city={this.props.city} />
        </div>
        <div className="App_forecast">
          <ForecastList forecast={this.props.forecast}/>
        </div>
      </div>
      )
    }

    return <p>.-.-.-.-.-.</p>
  }
}

const mapStateToProps = (state) => {
  return{
    isLoading: state.isLoading,
    hasErrored: state.hasErrored,
    weather : state.weather,
    forecast: state.forecast,
    city: state.city
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
      fetch: (url) => dispatch(fetchWeather(url)) 
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (App);