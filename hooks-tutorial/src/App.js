import React, { useState } from 'react';
import StyledComponent from './StyledComponent';

const App = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr />
            {visible && <StyledComponent />}
        </div>
    );
};

export default App;
