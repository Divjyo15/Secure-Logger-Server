const express = require('express');
const app = express();
const port = 7860;
app.use(express.json());

// Yeh add karo ✅
app.get('/', (req, res) => {
  res.send('Server is running! 🚀');
});

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const numA = Number(a);
  const numB = Number(b);
  if(isNaN(numA) || isNaN(numB)){
    return res.status(400).send('Invalid input.');
  }
  res.send(`The sum of ${a} and ${b} is ${numA + numB}`);
});

app.post('/multiply', (req, res) => {
  const { c, d } = req.body;
  const numC = Number(c);
  const numD = Number(d);
  if(isNaN(numC) || isNaN(numD)){
    return res.status(400).send('Invalid input.');
  }
  res.send(`The product of ${c} and ${d} is ${numC * numD}`);
});

app.get('/users/:user', (req, res) => {
  const user = req.params.user;
  res.json({ id: 1, user: user, role: 'admin' });
});

app.get('/id/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id: id, message: `Received ID: ${id}` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
