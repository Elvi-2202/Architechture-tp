// UseCases/GetCartTotal.ts
import { Storable } from '../interfaces/Storable';

export class GetCartTotal {
    constructor(private storage: Storable) {}

    execute(): number {
        return this.storage.getTotalPrice();
    }
}