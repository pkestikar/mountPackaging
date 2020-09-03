import React from 'react';

const PageHeader = (props) => {
    return (
        <div className="mp--page-header">
            <h1>{ props.title }</h1>
        </div>
    )
};

PageHeader.defaultProps = {
    title: ''
};

export default PageHeader;
