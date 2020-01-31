export class Product {

    private name: string;
    private type: string;
    private quantity: number;
    private isChecked: boolean;

    constructor(name?: string, type?: string) {
        this.name = name || 'default';
        this.type = type || 'default';
        this.isChecked = false;
        this.quantity = 0;
    }

    set Name(value: string) {
        this.name = value;
    }
    get Name(): string {
        return this.name;
    }

    set Type(value: string) {
        this.type = value;
    }
    get Type(): string {
        return this.type;
    }

    set IsChecked(value: boolean) {
        this.isChecked = value;
    }
    get IsChecked(): boolean {
        return this.isChecked;
    }

    set Quantity(value: number) {
        this.quantity = value;
    }
    get Quantity(): number {
        return this.quantity;
    }
}
