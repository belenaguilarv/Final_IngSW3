import express from 'express';


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/students', (req, res) => {
    res.send("Student's list");
});

app.post('/students', (req, res) => {
    res.send("Insert Student's full name");
});

app.delete('/students', (req, res) => {
    res.send('Delete student');
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});

export default app;