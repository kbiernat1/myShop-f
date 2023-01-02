import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AdminCategoryNameDto } from "../../common/dto/adminCategoryNameDto";
import { FormCategoryService } from "./form-category.service";

@Component({
    selector: 'app-admin-product-form',
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
            <mat-label>nazwa</mat-label>
            <input matInput placeholder="podaj nazwę produktu" formControlName="name">
            <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" class="errorMessages">
                <div *ngIf="name?.errors?.['required']">
                    Nazwa jest wymagana
                </div>
                <div *ngIf="name?.errors?.['minlength']">
                    Nazwa musi mieć przynajmniej cztery znaki
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>przyjazny URL</mat-label>
            <input matInput placeholder="podaj URL" formControlName="slug">
            <div *ngIf="slug?.invalid && (slug?.dirty || slug?.touched)" class="errorMessages">
                <div *ngIf="slug?.errors?.['required']">
                    Nazwa jest wymagana
                </div>
                <div *ngIf="slug?.errors?.['minlength']">
                    Nazwa musi mieć przynajmniej cztery znaki
                </div>
            </div>
        </mat-form-field>
    
        <mat-form-field appearance="fill">
                <mat-label>kategoria</mat-label>
                    <mat-select formControlName="categoryId">
                        <mat-option *ngFor="let el of categories" [value]="el.id">{{el.name}}</mat-option>
                    </mat-select>
                    <div *ngIf="categoryId?.invalid && (categoryId?.dirty || categoryId?.touched)" class="errorMessages">
                        <div *ngIf="categoryId?.errors?.['required']">
                            Kategoria jest wymagana
                        </div>
                    </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>opis</mat-label>
            <textarea matInput rows="10" placeholder="podaj opis produktu" formControlName="description"></textarea>
            <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="errorMessages">
                <div *ngIf="description?.errors?.['required']">
                    Opis jest wymagany
                </div>
                <div *ngIf="description?.errors?.['minlength']">
                    Opis musi mieć przynajmniej cztery znaki
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>Pełny opis</mat-label>
            <textarea matInput rows="15" placeholder="Podaj pełny opis produktu" formControlName="fullDescription"></textarea>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>cena</mat-label>
            <input matInput placeholder="podaj cenę produktu" formControlName="price">
            <div *ngIf="price?.invalid && (price?.dirty || price?.touched)" class="errorMessages">
                <div *ngIf="price?.errors?.['required']">
                    Cena jest wymagana
                </div>
                <div *ngIf="price?.errors?.['min']">
                    Cena musi być większa od 0
                </div>
            </div>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>waluta</mat-label>
            <input matInput placeholder="podaj walutę produktu" formControlName="currency">
            <div *ngIf="currency?.invalid && (currency?.dirty || currency?.touched)" class="errorMessages">
                <div *ngIf="currency?.errors?.['required']">
                    Waluta jest wymagana
                </div>
                <div *ngIf="currency?.errors?.['maxlength']">
                    Waluta może przyjąć maksymalnie 3 znaki
                </div>
            </div>
        </mat-form-field>

        <div fxLayoutAlign="end">
            <button mat-flat-button color="primary" [disabled]="!parentForm.valid">zapisz</button>
        </div>
    </div>`,
    styles: [`
    .errorMessages{
        color: red;
    }`]
})
export class AdminProductFormComponent implements OnInit {

    @Input() parentForm!: FormGroup
    categories: Array<AdminCategoryNameDto> = [];

    constructor(private formCategoryService: FormCategoryService) { }

    ngOnInit(): void {
        this.getCategories();
    }

    getCategories() {
        return this.formCategoryService.getCategories()
        .subscribe(categories => this.categories = categories);
    }

    get name() {
        return this.parentForm.get("name");
    }
    get categoryId() {
        return this.parentForm.get("categoryId");
    }
    get description() {
        return this.parentForm.get("description");
    }
    get fullDescription(){
        return this.parentForm.get("fullDescription");
    }
    get price() {
        return this.parentForm.get("price");
    }
    get currency() {
        return this.parentForm.get("currency");
    }
    get slug() {
        return this.parentForm.get("slug");
    }
}