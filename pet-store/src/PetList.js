import React from 'react';
import PetCard from './PetCard';

const PetList = ({ pets }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {pets.map(pet => (
            <PetCard key={pet.name} pet={pet} />
        ))}
    </div>
);

export default PetList;
