import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');

// ReactDOM.render(<App />, rootElement);
ReactDOM.render(<div>React main container element</div>, rootElement);

module.hot.accept();
