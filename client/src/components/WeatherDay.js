import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class WeatherDay extends Component {
    render() {
        return (
            <div>
                {this.props.weatherData.map((val)=>{
                    return (
                        <Card style={{width: '27rem'}}>
                            <Card.Text>
                                low {val.low} high {val.high}
                            </Card.Text>
                            <Card.Text>
                                date": {val.date}
                            </Card.Text>
                        </Card>
                    )
                })
                }
            </div >
        )
    }
}
export default WeatherDay
