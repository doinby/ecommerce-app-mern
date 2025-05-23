import express from 'express';
import products from './data/products.js';

const port = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => res.send(`Hello World!`));

app.get('/api/products', (req, res) => res.json(products));
app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
