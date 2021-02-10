import { ProductService } from './product.service';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {

  constructor(private ProductService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = route.paramMap.get('id');

    if(isNaN(+id)) {
      const message = `Product ID was not a number: ${id}`;
      console.error(message);
      return;
    }

    return this.ProductService.getProduct(+id);
  }

}
