import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList$: BehaviorSubject<Product[]> =
    this.productService.list$;

  phraseControl: FormControl = new FormControl('');
  phrase: string = '';

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getAll();
    this.phraseControl.valueChanges.pipe(
      debounceTime(800)
    ).subscribe(
      newValue => this.phrase = newValue
    );
  }

}
