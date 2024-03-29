import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-category-form',
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
            <mat-label>nazwa</mat-label>
            <input matInput placeholder="podaj nazwę kategorii" formControlName="name">
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
            <mat-label>opis</mat-label>
            <textarea matInput rows="5" placeholder="podaj opis kategorii" formControlName="description"></textarea>
            <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="errorMessages">
                <div *ngIf="description?.errors?.['required']">
                    Opis jest wymagany
                </div>
                <div *ngIf="description?.errors?.['minlength']">
                    Opis musi mieć przynajmniej cztery znaki
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
export class AdminCategoryFormComponent implements OnInit {

    @Input() parentForm!: FormGroup

    constructor() { }

    ngOnInit(): void {
    }

    get name() {
        return this.parentForm.get("name");
    }
    get description() {
        return this.parentForm.get("description");
    }
    get slug() {
        return this.parentForm.get("slug");
    }
}