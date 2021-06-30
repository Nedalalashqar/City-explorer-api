import React, { Component } from 'react'

export class Weather extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.desc}</h1>
                <h1>{this.props.date}</h1>
            </div>
        )
    }
}

export default Weather
