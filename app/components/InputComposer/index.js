import React from 'react';
import classNames from 'classnames';

const InputComposer = (props) => {
    const classes = classNames(
        'mp--input-composer',
        {
            'error': props.hasError
        }
    );

    return (
        <div className={classes}>
            {props.label &&
            <span>{props.label}</span>
            }
            {props.children}
            {props.hasError &&
            <span className="error-message">
                {props.errorMessage}
            </span>
            }
        </div>
    )
};

InputComposer.defaultProps = {
    errorMessage: 'Field required.'
};

export default InputComposer;
