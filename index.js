const express = require('express');
const app = express();
const port = 7860;
app.use(express.json());
app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const numA = Number(a);
  const numB=  Number(b);
  if(isNaN(numA)|| (isNaN(numB))){
    return res.status(400).send('Invalid input. Please provide valid numbers for a and b.');
  }
  const sum = numA + numB;
  res.send(`The sum of ${a} and ${b} is ${sum}`);
});
app.post('/multiply',(req,res)=>{
    const {c,d}=req.body;
    const numC= Number(c);
    const numD= Number(d);
    if(isNaN(numC)|| (isNaN(numD))){
        return res.status(400).send('Invalid input. Please provide valid numbers for c and d.');
      }
      const product= numC * numD;
      res.send(`The product of ${c} and ${d} is ${product}`);
})
app.get('/users/:user',(req,res)=>{
    const  user = req.params.user;
    const name={
        'id':1,
        'user': user,
        'role':'admin'
    }
    res.json(name);
})
app.get('/id/:id',(req,res)=>{
    const id = req.params.id;
    const data={
        'id': id,
        'message': `Received ID: ${id}`
    }
    res.json(data);
    })
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
