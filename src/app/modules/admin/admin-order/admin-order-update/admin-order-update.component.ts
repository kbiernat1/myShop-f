import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminOrderService } from '../admin-order.service';
import { AdminOrder } from '../model/adminOrder';

@Component({
  selector: 'app-admin-order-update',
  templateUrl: './admin-order-update.component.html',
  styleUrls: ['./admin-order-update.component.scss']
})
export class AdminOrderUpdateComponent implements OnInit {

  order!: AdminOrder;
  formGroup!: FormGroup;

  statuses!: Map<string, string>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminOrderService: AdminOrderService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getOrder();
    this.getInitData();
    this.formGroup = this.formBuilder.group({
      orderStatus: ['', Validators.required]
    })
  }

  
  getOrder() {
    let id = Number(this.activatedRoute.snapshot.params['id']);
    this.adminOrderService.getOrder(id)
    .subscribe(order => {
      this.order = order;
      this.formGroup.setValue({
        orderStatus: order.orderStatus
      })
    });
  }
  
  changeStatus(){
    this.adminOrderService.saveStatus(this.order.id, this.formGroup.value)
    .subscribe();
  }
  
  getInitData() {
    this.adminOrderService.getInitData()
      .subscribe(data => this.statuses = data.orderStatuses)
  }

  get orderId() { return (this.order && this.order.id) ? this.order.id : null }
  get orderPlaceDate() { return (this.order && this.order.placeDate) ? this.order.placeDate : null }
  get orderFirstname() { return (this.order && this.order.firstname) ? this.order.firstname : null }
  get orderLastname() { return (this.order && this.order.lastname) ? this.order.lastname : null }
  get orderStreet() { return (this.order && this.order.street) ? this.order.street : null }
  get orderZipcode() { return (this.order && this.order.zipcode) ? this.order.zipcode : null }
  get orderCity() { return (this.order && this.order.city) ? this.order.city : null }
  get orderEmail() { return (this.order && this.order.email) ? this.order.email : null }
  get orderPhone() { return (this.order && this.order.phone) ? this.order.phone : null }
  get orderGrossValue() { return (this.order && this.order.grossValue) ? this.order.grossValue : null }
  get orderPaymentName() { return (this.order && this.order.payment.name) ? this.order.payment.name : null }
}
