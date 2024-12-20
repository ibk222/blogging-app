import React from 'react';

const Filter = ({ setFilterType }) => (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <select onChange={e => setFilterType(e.target.value)} style={{ padding: '10px', fontSize: '16px' }}>
            <option value="">All Pets</option>
            <option value="Dog">Dogs</option>
            <option value="Cat">Cats</option>
            <option value="Bird">Birds</option>
        </select>
    </div>
);

export default Filter;
