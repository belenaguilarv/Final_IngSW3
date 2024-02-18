import express from 'express';
import {db} from './db.js'


const app = express();

app.use(express.json());


// GET all the products from the list
app.get('/products', (req, res) => {
    res.send("Supermarket's list");
});

// INSERT a product
app.post('/products', (req, res) => {
    res.send("Insert a product to buy");
});

// DELETE a product from the list
app.delete('/products/:id', (req, res) => {
    res.send('Delete product from the list');
});


// Port connection 
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});

export default app;