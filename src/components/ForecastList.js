import React, {Component} from 'react'
import ForecastListItem from './ForecastListItem'
import {Grid, Row, Col} from 'react-bootstrap'

export default class ForecastList extends Component{

    constructor(props){
        super(props)

        this.renderEachItem = this.renderEachItem.bind(this)
    }

    componentDidMount(){
        this.props.forecast.map((e,i) => console.log("ForecastList Component - ", i, e.timestamp + ", ", e.icon))
    }


    renderEachItem(){
        const items = this.props.forecast.map(
            e => (
                <Col xs={4}>
                    <ForecastListItem data={e} />
                </Col>
            )
        )

        return items;
    }

    render(){
        return(
            <div className="ForecastList">
            <Grid>
                <Row>
                    {this.renderEachItem()}
                </Row>
            </Grid>
            </div>
        )
    }
}