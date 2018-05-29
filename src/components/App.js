import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../redux/actions/items'

import NowDate from './NowDate'
import Current from './Current'
import Location from './Location'

import './App.css'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      url : "http://api.openweathermap.org/data/2.5/weather?lat="
    }
  }

  componentDidMount(){
    this.props.fetch(this.state.url)
  }


  render() {
    return (
      <div className="App container">
        <NowDate/>
        <Current weather={this.props.weather}/>
        <Location city={this.props.city} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    isLoading: state.isLoading,
    hasErrored: state.hasErrored,
    weather : state.weather,
    city: state.city
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
      fetch: (url) => dispatch(fetchWeather(url)) 
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (App);
