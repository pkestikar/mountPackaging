import React from 'react';
import { ReactSVG } from "react-svg";

const Icon = (props) => {
    //TODO: Need to fix this..not working right

    return (
        <ReactSVG
            src={`${props.iconPath}`}
            beforeInjection={(svg) => {
                svg.setAttribute('style', `height: ${props.sizeInPixels}px; width: ${props.sizeInPixels}px`);
            }}
            wrapper={'span'}
            className={'mp--icon'}
            onClick={() => props.onClick}
        />
    );
};

Icon.defaultProps = {
    onClick: () => {},
    sizeInPixels: '16'
};

export default Icon;
