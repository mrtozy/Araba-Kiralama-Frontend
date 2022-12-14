import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import {Customer} from "../../models/customer/customer";
import {CustomerService} from "../../services/customer/customer.service";

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    customers: Customer[] = [];
    dataLoaded = false;

    constructor(private customerService: CustomerService) { }

    ngOnInit(): void {
        this.getCustomers();
    }

    getCustomers() {
        this.customerService.getCustomersDetail().subscribe(response => {
            this.customers = response.data;
            this.dataLoaded = true;
        });
    }
    
 

}
