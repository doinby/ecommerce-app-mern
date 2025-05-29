import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import products from './data/products.js';

const port = process.env.PORT || 8888;

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send(`Hello World!`));
app.get('/api/products', (req, res) => res.json(products));
app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

app.listen(port, () => console.log(`listening on port ${port}...`));
