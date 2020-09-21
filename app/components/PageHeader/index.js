import React from 'react';
import classNames from 'classnames';

const PageHeader = (props) => {
    const classes = classNames(
        'mp--page-header',
        {
            'centered': props.centered
        }
    );

    return (
        <div className={classes}>
            <h1>{ props.title }</h1>
        </div>
    )
};

PageHeader.defaultProps = {
    title: '',
    centered: false
};

export default PageHeader;
