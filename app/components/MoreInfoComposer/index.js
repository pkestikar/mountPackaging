import React from 'react';
import Button from "Components/Button";
import classNames from 'classnames';

const MoreInfoComposer = (props) => {
    let classes = classNames(
        'mp--more-info-composer',
        {
            'border-top': props.borderTop,
            'normal-font': props.normalFontSize
        }
    )
    return (
        <div className={classes}>
            <span>{props.title}</span>
            <Button palette={'secondary'} onClick={() => props.handleClick()}>{props.ctaText}</Button>
        </div>
    )
};

MoreInfoComposer.defaultProps = {
    title: '',
    ctaText: '',
    handleClick: () => {},
    normalFontSize: false,
    borderTop: false
};

export default MoreInfoComposer;
