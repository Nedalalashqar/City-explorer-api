import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

export class Movie extends Component {
  render() {
    return (
      <CardColumns style={{ display: "flex", flexWrap: "wrap" }}>
        {this.props.movies.map((movie) => {
          return (
            <Card
              bg="secondary"
              text="white"
              className="text-center p-3"
              style={{ display: "inline-block", width: "350px", height: "450px", overflow: "auto" }}
            >
              <Card.Title> {movie.title} </Card.Title>
              <Card.Img
                style={{ maxHeight: "300px" }}
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.image_url}`}
                alt={this.props.title}
                onClick={this.renderModel}
              />
              <Card.Body>
                <Card.Text> Vote ❤️ = {movie.total_votes} </Card.Text>
                <Card.Text> Vote Average: {movie.average_vote} </Card.Text>
                <Card.Text>Popularity: {movie.popularity} </Card.Text>
                <Card.Text> Released : {movie.released_on} </Card.Text>
                <Card.Text> Review: {movie.overview} </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    );
  }
}

export default Movie;
