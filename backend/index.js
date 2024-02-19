import express from 'express';
import {db} from './db.js'

const app = express();

app.use(express.json());



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
        const [rows] = await db.query(
            'INSERT INTO list (product, quantity) VALUES (?, ?)', [product, quantity]
        );
        res.status(201).json({ id: rows.insertId, product, quantity });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
});

// DELETE a product from the list
app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query("DELETE FROM list WHERE id = ?", [id]);

        if (rows.affectedRows <= 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.sendStatus(204);
      
    } catch (error) {
        return res.status(500).json({ message: "Server error" });        
    }
});


// Port connection 
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});

export default app;