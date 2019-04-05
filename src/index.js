// use commonjs module syntax require
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const Description = require('./client/components/Description').default;
const app = express();

app.get('/', (req, res) => {
  const content = renderToString(
    <div>
      <Home />
      <Description />
    </div>,
  );
  res.send(content);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
