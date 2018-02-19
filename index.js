import * as functions from 'firebase-functions';
import { h } from 'preact';
import { render } from 'preact-render-to-string';

import App from './src/containers/App';
import express from 'express';
import fs from 'fs';

const index = fs.readFileSync(__dirname + '/index.html', 'utf8'); // maybe async?
const app = express();

app.get('**', (req, res) => {
  const html = render(<App />);
  const final = index.replace('<!-- ::APP:: -->', html);

  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
  res.send(final);
});

export let ssrapp = functions.https.onRequest(app)