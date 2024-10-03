// main.ts
import { Product } from './Entites/Product';
import { InMemoryStorage } from './Repositories/InMemoryStorage';
import { LocalStorage } from './Repositories/LocalStorage';
import { AddProductToCart } from './UseCases/AddProductToCart';
import { GetCartTotal } from './UseCases/GetCartTotal';

// Choisissez le type de stockage que vous voulez utiliser
const storage = new InMemoryStorage();
// const storage = new LocalStorage();

// Créez quelques produits
const product1 = new Product('Livre', 15.99);
const product2 = new Product('Stylo', 2.50);
const product3 = new Product('Cahier', 4.99);

// Utilisez le cas d'utilisation pour ajouter des produits au panier
const addToCart = new AddProductToCart(storage);
addToCart.execute(product1);
addToCart.execute(product2);
addToCart.execute(product3);

// Utilisez le cas d'utilisation pour obtenir le total du panier
const getTotal = new GetCartTotal(storage);
const total = getTotal.execute();

console.log('Produits dans le panier:');
storage.getProducts().forEach(product => {
    console.log(`- ${product.name}: $${product.price}`);
});
console.log(`Total du panier: $${total.toFixed(2)}`);