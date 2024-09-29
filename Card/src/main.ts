// src/main.ts
import { Product } from './services/Product';
import { InMemoryStorage } from './services/InMemoryStorage';
import { Cart } from './services/Cart';

const storage = new InMemoryStorage<Product>();
const cart = new Cart(storage);

const product1 = new Product("Laptop", 999.99);
const product2 = new Product("Mouse", 29.99);

cart.addProduct(product1);
cart.addProduct(product2);

console.log("Products in cart:", cart.getProducts());
console.log("Total price:", cart.getTotalPrice());

cart.removeProduct(product2);

console.log("Products in cart after removal:", cart.getProducts());
console.log("Updated total price:", cart.getTotalPrice());