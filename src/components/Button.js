import React from 'react';
import '../styles/Button.css';

function Button(props) {

    const isOperator = value => {
        // eslint-disable-next-line eqeqeq
        return isNaN(value) && (value != '.') && (value != '=');
    };
    
    return (
        <div 
        className={`button-container ${isOperator(props.children) ? 'operator':''}`.trimEnd()}
        onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Button;