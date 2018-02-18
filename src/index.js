import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

import { fetchList } from './api/api';
 
fetchList().then(list => {
    render(<App list={list} />, document.querySelector('#root'));
})
