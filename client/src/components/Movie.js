import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export class Movie extends Component {
    render() {
        return (
            <div>
                {this.props.movies.map((val) => {
                    return (
                        <Card style={{ width: '27rem' }}>
                            <Card.Text>
                               Title : " {val.title}"
                            </Card.Text>
                            <Card.Text>
                               Average : " {val.average_votes}"
                            </Card.Text>
                            <Card.Text>
                           Votes Total : " {val.total_votes}"
                            </Card.Text>
                        </Card>
                    )
                })
                }
            </div >
        )
    }
}
export default Movie