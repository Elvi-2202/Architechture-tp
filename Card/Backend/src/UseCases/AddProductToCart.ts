// UseCases/AddProductToCart.ts
import { Product } from '../Entites/Product';
import { Storable } from '../interfaces/Storable';

export class AddProductToCart {
    constructor(private storage: Storable) {}

    execute(product: Product): void {
        this.storage.addProduct(product);
    }
}