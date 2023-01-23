import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function NewsItem(props) {
    return (
        
        <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imageUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="primary btn-sm">Read More</Button>
            </Card.Body>
        </Card>
        </div>
    )
}
