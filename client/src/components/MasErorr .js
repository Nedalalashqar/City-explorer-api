import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'

export class MasErorr  extends Component {
    render() {
        return (
            <div>
                {this.props.alert &&
                    <Alert variant={'danger'}>
                        Error: 'Wrong Input!'
                    </Alert>
                }
            </div>
        )
    }
}
export default MasErorr 
