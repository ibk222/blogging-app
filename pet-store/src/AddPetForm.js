import React, { useState } from 'react';

const AddPetForm = ({ addPet }) => {
    const [pet, setPet] = useState({ name: '', type: '', age: '', description: '', image: '' });

    const handleChange = e => {
        const { name, value } = e.target;
        setPet(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (pet.name && pet.type && pet.age && pet.description && pet.image) {
            addPet(pet);
            setPet({ name: '', type: '', age: '', description: '', image: '' });
        } else {
            alert('Please fill out all fields!');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0', textAlign: 'center' }}>
            <input type="text" name="name" placeholder="Pet Name" value={pet.name} onChange={handleChange} style={{ margin: '5px', padding: '10px' }} />
            <input type="text" name="type" placeholder="Pet Type" value={pet.type} onChange={handleChange} style={{ margin: '5px', padding: '10px' }} />
            <input type="number" name="age" placeholder="Pet Age" value={pet.age} onChange={handleChange} style={{ margin: '5px', padding: '10px' }} />
            <input type="text" name="description" placeholder="Description" value={pet.description} onChange={handleChange} style={{ margin: '5px', padding: '10px' }} />
            <input type="text" name="image" placeholder="Image URL" value={pet.image} onChange={handleChange} style={{ margin: '5px', padding: '10px' }} />
            <button type="submit" style={{ padding: '10px 20px' }}>Add Pet</button>
        </form>
    );
};

export default AddPetForm;
