import express from 'express';

const app = express();

const PORT = 8000;
app.get('/', (req, res) => res.send('node.js rocks with Typescript...'));

app.listen(PORT, () => {
  console.log(`Server is runnig at http://localhost:${PORT}`);
});
