// Interfaces/Storable.ts
import { Product } from '../Entites/Product';

export interface Storable {
    addProduct(product: Product): void;
    getProducts(): Product[];
    getTotalPrice(): number;
}