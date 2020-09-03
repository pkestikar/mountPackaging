import React from 'react';
import { useMediaQuery } from 'react-responsive';

const MQMaxSmallWidth = 600;
const MQMinMediumWidth = 601;
const MQMaxMediumWidth = 960;
const MQMinLargeWidth = 961;

export const MQMaxSmall = (props) => {
    const isMQMaxSmall = useMediaQuery({ maxWidth: MQMaxSmallWidth });
    return isMQMaxSmall ? props.children : null;
};

export const MQMinMedium = (props) => {
    const isMQMinMedium = useMediaQuery({ minWidth: MQMinMediumWidth });
    return isMQMinMedium ? props.children : null;
};

export const MQMaxMedium = (props) => {
    const isMQMaxMedium = useMediaQuery({ maxWidth: MQMaxMediumWidth });
    return isMQMaxMedium ? props.children : null;
};

export const MQMinLarge = (props) => {
    const isMQMinLarge = useMediaQuery({ minWidth: MQMinLargeWidth });
    return isMQMinLarge ? props.children : null;
};
