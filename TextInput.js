import React from 'react';

const TextInput = ({ setTextInput }) => {
    const handleChange = (event) => {
        setTextInput(event.target.value);
    };

    return (
        <div>
            <input type="text" placeholder="Enter guidance text" onChange={handleChange} />
        </div>
    );
};

export default TextInput;