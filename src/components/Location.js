import React, {Component} from 'react';

export default class Location extends Component{    
    render(){
        return(
            <div className="Location">
                <p className="Location_city">{this.props.city}</p>
            </div>
        )
    }
}
