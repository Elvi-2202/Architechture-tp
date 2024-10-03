// server.ts
import express from 'express';
import { InMemoryStorage } from './Repositories/InMemoryStorage';
import { CartController } from './Controller/CartController';

const app = express();
app.use(express.json());

const storage = new InMemoryStorage(); 
const cartController = new CartController(storage);

app.post('/cart/products', (req, res) => cartController.addProduct(req, res));
app.get('/cart/total', (req, res) => cartController.getTotal(req, res));

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});