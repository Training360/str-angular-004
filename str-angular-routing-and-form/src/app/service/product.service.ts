import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private list: Product[] = [
    {id: 1, name: 'Bread', seoName: 'bread', price: 2, active: true},
    {id: 2, name: 'Cheese', seoName: 'cheese', price: 2, active: true},
    {id: 3, name: 'Egg', seoName: 'coutry-egg', price: 2, active: true},
    {id: 4, name: 'Milk', seoName: 'fresh-milk', price: 2, active: true},
    {id: 5, name: 'Nutella', seoName: 'ferrero-nutella', price: 2, active: true},
    {id: 6, name: 'Flour', seoName: 'hungarian-flour', price: 2, active: true},
    {id: 7, name: 'Pasta', seoName: 'italian-pasta', price: 2, active: true},
  ];

  list$: BehaviorSubject<Product[]> =
    new BehaviorSubject<Product[]>([]);

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }

  get(id: number | string): Observable<Product | undefined> {
    id = parseInt(('' + id), 10);
    return of( this.list$.value.find( item => item.id === id ) );
  }

  getBySeoName(name: string): Observable<Product | undefined> {
    return of( this.list$.value.find( item => item.seoName === name ) );
  }

}
