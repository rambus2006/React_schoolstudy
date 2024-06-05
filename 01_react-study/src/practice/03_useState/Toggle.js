import React, { useState } from 'react';

function Toggle({ onActive }) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(prevActive => !prevActive);
        if (active && onActive) {
            onActive();
        }
    };

    return (
        <button onClick={handleClick}>
            {active ? 'Active' : 'Inactive'}
        </button>
    );
}

export default Toggle;
