import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CategoryService } from './category.service';
import { CategoryProducts } from './model/categoryProducts';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  categoryProducts!: CategoryProducts;
  private sub!: Subscription;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
    ) { }
    
    ngOnInit(): void {
      this.sub = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
        ).subscribe(() => this.getCategoryWithProducts(0, 10));
        this.getCategoryWithProducts(0, 10);
      }
      
      getCategoryWithProducts(page: number, size: number) {
        let slug = this.route.snapshot.params['slug'];
        this.categoryService.getCategoryWithProducts(slug, page, size)
        .subscribe(categoryProducts => this.categoryProducts = categoryProducts);
      }
      
      ngOnDestroy(): void {
       this.sub.unsubscribe();
      }

      onPageEvent(event: PageEvent) {
        this.getCategoryWithProducts(event.pageIndex, event.pageSize);
      }

      get categoryProductsCategory() {return (this.categoryProducts && this.categoryProducts.category) ? this.categoryProducts.category : null}
      get categoryProductsCatName() { return (this.categoryProductsCategory && this.categoryProductsCategory.name) ? this.categoryProductsCategory.name : null }
      get categoryProductsCatDesc() { return (this.categoryProductsCategory && this.categoryProductsCategory.description) ? this.categoryProductsCategory.description : null }
      get categoryProductsProducts() {return (this.categoryProducts && this.categoryProducts.products) ? this.categoryProducts.products : null}
      get categoryProductsProdCont() {return (this.categoryProductsProducts && this.categoryProductsProducts.content) ? this.categoryProductsProducts.content : null}
      get categoryProductsProdElements() {return (this.categoryProductsProducts && this.categoryProductsProducts.totalElements) ? this.categoryProductsProducts.totalElements : null}
    }
    