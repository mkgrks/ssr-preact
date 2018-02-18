import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './src/containers/App';
import { fetchList } from './src/api/api';
import * as express from 'express';

const app = express();

app.get('**', (req, res) => {
  fetchList().then(res => { //resolve a promise
    const html = renderToString(<App list={res} />);
    // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(html);
  })
});

export default app;