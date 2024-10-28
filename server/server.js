const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
  const products = [
    { 
      id: 1, 
      name: 'Set de Collares', 
      oldPrice: 20000, 
      price: 17500, 
      urlImg: 'https://i.pinimg.com/564x/89/be/c4/89bec43a65ad988a435fe5870f2b2784.jpg'
    },
    {
      id: 2, 
      name: 'Set de Anillos',  
      oldPrice: 40000, 
      price: 37500, 
      urlImg: 'https://i.pinimg.com/736x/42/34/0a/42340ab87efc420ae864cd345cf360e4.jpg' 
    },
    { 
      id: 3, 
      name: 'Argollas Acero Dorado',  
      oldPrice: 18500, 
      price: 18000, 
      urlImg: 'https://i.pinimg.com/736x/45/e7/e3/45e7e314426f397a011e571cdd596902.jpg' 
    },
    { 
      id: 3, 
      name: 'Collar de perlas',  
      oldPrice: 3500, 
      price: 2200, 
      urlImg: 'https://i.pinimg.com/736x/b5/cd/6a/b5cd6aaf0c573a4575efd0421acb4166.jpg' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});