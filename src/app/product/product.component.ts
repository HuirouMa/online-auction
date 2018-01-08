import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }

  ngOnInit() {     //component lifecycle -> hook 在ProductComponent实例化后被调用一次

    this.products = [
      new Product(1, "the first item", 1.99, 3.5, "item description", ["electric", "hardware"]),
      new Product(2, "the second item", 1.99, 3, "item description", ["electric", "software"]),
      new Product(3, "the third item", 1.99, 5, "item description", ["electric", "home"]),
      new Product(4, "the fourth item", 1.99, 3, "item description", ["electric", "home"]),
      new Product(5, "the fifth item", 1.99, 4.5, "item description", ["book", "home"]),
      new Product(6, "the sixth item", 1.99, 3.5, "item description", ["electric", "software"])
    ];
  }
}


export class Product {

  constructor(
    public  id:number,
    public  title:string,
    public  price:number,
    public  rating:number,
    public  desc:string,
    public  categories:Array<string>
  ){

  }
}
