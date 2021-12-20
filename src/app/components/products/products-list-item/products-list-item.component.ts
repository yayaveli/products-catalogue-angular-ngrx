import { Component, Input, OnInit } from '@angular/core'
import { Product } from 'src/app/models/product.model'

@Component({
  selector: 'app-products-list-item',
  templateUrl: './products-list-item.component.html',
  styleUrls: ['./products-list-item.component.css'],
})
export class ProductsListItemComponent implements OnInit {
  @Input() product?: Product
  constructor() {}

  ngOnInit(): void {}
}
