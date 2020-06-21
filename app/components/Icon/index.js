import React from 'react';
import { ReactSVG } from "react-svg";

const Icon = (props) => {
    //TODO: Need to work in to use ReactSVG when using CDN
    // return (
    //     <ReactSVG
    //         src={`${props.iconPath}`}
    //         beforeInjection={(svg) => {
    //             svg.setAttribute('style', `height: ${props.sizeInPixels}px; width: ${props.sizeInPixels}px`);
    //         }}
    //         wrapper={'span'}
    //         className={'mp--icon'}
    //         onClick={() => props.onClick}
    //     />
    // );

    return (
        <span className={'mp--icon'}>
            <img src={`../../../images/svg/${props.icon}.svg`} alt="" style={{ width: `${props.sizeInPixels}px`, height: `${props.sizeInPixels}px` }}/>
        </span>
    )
};

Icon.defaultProps = {
    onClick: () => {},
    sizeInPixels: '16'
};

export default Icon;
