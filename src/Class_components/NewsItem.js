import React, { Component } from "react";
// import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newUrl } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={
              imageUrl
                ? imageUrl
                : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
            }
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <a
              href={newUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              {" "}
              Read More
            </a>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
