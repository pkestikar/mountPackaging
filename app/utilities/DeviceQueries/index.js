import React from 'react';
import { useMediaQuery } from 'react-responsive';

const MQMaxSmallWidth = 450;
const MQMinMediumWidth = 451;
const MQMaxMediumWidth = 768;
const MQMinLargeWidth = 769;

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
