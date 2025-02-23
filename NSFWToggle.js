import React from 'react';

const NSFWToggle = ({ isNSFW, setIsNSFW }) => {
    const handleToggle = () => {
        setIsNSFW(!isNSFW);
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={isNSFW} onChange={handleToggle} /> Enable NSFW Mode
            </label>
        </div>
    );
};

export default NSFWToggle;