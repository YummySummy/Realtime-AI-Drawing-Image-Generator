import React from 'react';

const ReferenceImageUpload = ({ setReferenceImage }) => {
    const handleUpload = (event) => {
        setReferenceImage(event.target.files[0]);
    };

    return (
        <div>
            <input type="file" onChange={handleUpload} />
        </div>
    );
};

export default ReferenceImageUpload;
