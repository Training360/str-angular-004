import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>
        this.productService.get(params.idOrName).subscribe(
          product => {
            console.log(product);
            this.product = product || new Product();
          }
        )
    );
  }

  onFormSubmit(form: NgForm): void {
    console.log(form.value);
  }

}
