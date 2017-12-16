const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const bins = [{
  id: 1,
  name: 'widget',
  price: 10,
}, {
  id: 2,
  name: null,
  price: null,
}];

app.get('/api/shelf/:id', (req, res) => {
  res.json({ bins: bins });
});

app.post('/api/bin/:id', (req, res) => {
  const { name, price } = req.body;
  const binId = req.params.id;
  const bin = bins.find(bin => bin.id === parseInt(binId, 10));
  bin.name = name;
  bin.price = price;
  res.status(200).send();
})

const PORT = 3333
app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});
