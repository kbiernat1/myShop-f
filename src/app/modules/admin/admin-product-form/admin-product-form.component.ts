import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-product-form',
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
            <mat-label>nazwa</mat-label>
            <input matInput placeholder="podaj nazwę produktu" formControlName="name">
        </mat-form-field>
    
        <mat-form-field appearance="fill">
            <mat-label>kategoria</mat-label>
            <input matInput placeholder="podaj kategorię produktu" formControlName="category">
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>opis</mat-label>
            <textarea matInput rows="20" placeholder="podaj opis produktu" formControlName="description"></textarea>
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>cena</mat-label>
            <input matInput placeholder="podaj cenę produktu" formControlName="price">
        </mat-form-field>

        <mat-form-field appearance="fill">
            <mat-label>waluta</mat-label>
            <input matInput placeholder="podaj walutę produktu" formControlName="currency">
        </mat-form-field>

        <div fxLayoutAlign="end">
            <button mat-flat-button color="primary">zapisz</button>
        </div>
    </div>`
})
export class AdminProductFormComponent implements OnInit {

    @Input() parentForm!: FormGroup

    ngOnInit(): void {

    }
}