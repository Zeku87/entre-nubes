import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

export default class Location extends Component{    
    render(){
        return(
            <div className="Location container">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <h2 className="Location_city">{this.props.city}</h2>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
