import React from 'react';
import Button from "Components/Button";

const MoreInfoComposer = (props) => {
    return (
        <div className="mp--more-info-composer">
            <span className={`${props.normalFontSize ? 'normal-font' : ''}`}>{props.title}</span>
            <Button palette={'secondary'} onClick={() => props.handleClick()}>{props.ctaText}</Button>
        </div>
    )
};

MoreInfoComposer.defaultProps = {
    title: '',
    ctaText: '',
    handleClick: () => {},
    normalFontSize: false
};

export default MoreInfoComposer;
