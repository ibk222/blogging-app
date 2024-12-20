import React from 'react';
import { Card } from 'react-bootstrap';

const PetCard = ({ pet }) => (
    <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={pet.image} alt={pet.name} />
        <Card.Body>
            <Card.Title>{pet.name}</Card.Title>
            <Card.Text>
                <strong>Type:</strong> {pet.type} <br />
                <strong>Age:</strong> {pet.age} years <br />
                <strong>Description:</strong> {pet.description}
            </Card.Text>
        </Card.Body>
    </Card>
);

export default PetCard;
