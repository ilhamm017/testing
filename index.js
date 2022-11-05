// const app = express();

// app.use(cors());

// app.get('/', (req, res) => {
//   return res.send('Received a GET HTTP method');
// });

// app.post('/', (req, res) => {
//   return res.send('Received a POST HTTP method');
// });

// app.put('/', (req, res) => {
//   return res.send('Received a PUT HTTP method');
// });

// app.delete('/', (req, res) => {
//   return res.send('Received a DELETE HTTP method');
// });

// app.listen(process.env.PORT, () =>
//   console.log(`Example app listening on port ${process.env.PORT}!`),
// );

const express = require('express');
const app = express();
const routers = require('./src/routers');
const dotEnv = require('dotenv/config');

app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use(express.json());

app.use(routers);

app.listen(dotEnv.PORT, () => {
  console.log(`Berjalan pada PORT ${dotEnv.PORT}`);
});
