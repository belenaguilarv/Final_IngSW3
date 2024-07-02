import express from 'express';
import {db} from './db.js'
import cors from 'cors';


const app = express();

//midlewares
app.use(express.json());
app.use(cors());





// GET all the products from the list
app.get('/products', async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM list");
        res.json(rows)
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
});

// INSERT a product
app.post('/products', async (req, res) => {
    try {
        const {product, quantity} = req.body
        const result = await db.query('INSERT INTO list (product, quantity) VALUES (?, ?)', [product, quantity]);
        
        const insertId = result.insertId;
        
        res.status(201).json({ id: insertId, product, quantity });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

// DELETE a product from the list
app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query("DELETE FROM list WHERE id = ?", [id]);

        res.sendStatus(204);
      
    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: "Server error" });        
    }
});


// Port connection
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});


export default app;