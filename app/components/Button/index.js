import React from 'react';
import classnames from 'classnames';

const Button = (props) => {
    const componentName = 'mp--button';
    const classes = classnames(
        `${componentName}`,
        {[`${props.customClass}`]: !!props.customClass},
        {[`loading`]: !!props.isLoading},
        {['disabled']: !!props.disabled},
        {[`small`]: props.size === 'small'},
        {[`medium`]: props.size === 'medium'},
        {[`large`]: props.size === 'large'},
        {[`${componentName}-${props.palette}`]: !!props.palette}
    );

    return (
        <button className={classes} onClick={() => props.onClick()}>
            {props.isLoading ?
                'Loading..'
                :
                props.children
            }
        </button>
    )
};

Button.defaultProps = {
    size: 'medium',
    disabled: false,
    loading: false,
    palette: 'primary'
};

export default Button;
