import * as functions from 'firebase-functions';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './src/containers/App';
import { fetchList } from './src/api/api';
import express from 'express';
import fs from 'fs';

const index = fs.readFileSync(__dirname + '/index.html', 'utf8'); // maybe async?
const app = express();

app.get('**', (req, res) => {
  fetchList().then(res => { //resolve a promise
    const html = renderToString(<App list={res} />);
    const final = index.replace('<!-- ::APP:: -->', html);

    res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
    res.send(final);
  })
});

export let ssrapp = functions.https.onRequest(app)