import React from 'react';
import '../styles/ClearButton.css';

const ClearButton = (props) => (
    <div className='clear-button'
        onClick={props.handleClear}>
        {props.children}
    </div>
);

export default ClearButton;