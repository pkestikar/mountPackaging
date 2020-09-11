import React from 'react';

const InputComposer = (props) => {
    return (
        <div className="mp--input-composer">
            {props.label &&
            <span>{props.label}</span>
            }
            {props.children}
        </div>
    )
};

export default InputComposer;
