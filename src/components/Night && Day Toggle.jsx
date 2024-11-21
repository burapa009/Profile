import React, { useState } from 'react';

const NightDayToggle = () => {
    const [isHandMode, setHandMode] = useState(false);
    

    const toggleLightMode = () => {
        setLightMode(!isLightMode);
    };

    return (
        <div>
            <button onClick={toggleLightMode}>
                {isLightMode ? 'ปิดโหมดสว่าง' : 'เปิดโหมดสว่าง'}
            </button>
        </div>
    );
};

export default NightDayToggle;


rafce 