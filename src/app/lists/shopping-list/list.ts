import { Product } from './product';

export class ShoppingList {
  private _name: string;
  private _products: { [type: string]: Product[] } = {};
  private _typeList: string[];

  constructor(name?: string) {
    this.name = name || 'List name';
    this.typeList = [];
    this.addDummyProducts();
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get products(): { [type: string]: Product[] } {
    return this._products;
  }
  public set products(value: { [type: string]: Product[] }) {
    this._products = value;
  }
  public get typeList(): string[] {
    return this._typeList;
  }
  public set typeList(value: string[]) {
    this._typeList = value;
  }

  public addProduct(item: Product): void {
    if (!this.products[item.Type]) {
      this.products[item.Type] = [];
      this.typeList.push(item.Type);
    }
    this.products[item.Type].push(item);
    console.log(this.products);
  }

  public clearList() {
    this.products = {};
    this.typeList = [];
  }

  private addDummyProducts() {
    this.addProduct(new Product('Chocolate', 'Candy'));
    this.addProduct(new Product('b', 'Candy'));
    this.addProduct(new Product('a', 'Candy'));
    this.addProduct(new Product('aa', 'Candy'));
    this.addProduct(new Product('bb', 'Candy'));
    this.addProduct(new Product('Chocolate', 'Candy'));
    this.addProduct(new Product('c', 'Candy'));
    this.addProduct(new Product('Chocolate', 'Candy'));
    this.addProduct(new Product('Chocolate', 'Meat'));
    this.addProduct(new Product('g', 'Meat'));
    this.addProduct(new Product('g', 'Clothing'));
    this.addProduct(new Product('Chocolate', 'Shoes'));
    this.addProduct(new Product('h', 'Electronics'));
    this.addProduct(new Product('Chocolate', 'Sports'));
  }
}
