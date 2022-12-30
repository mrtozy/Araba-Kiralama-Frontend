import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Rental} from 'src/app/models/rental/rental';
import {RentalService} from "../../services/rental/rental.service";


@Component({
    selector: 'app-rental',
    templateUrl: './rental.component.html',
    styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

    addFormGroup: FormGroup;
  currentCarId: number;
  rentDate:Date;
  returnDate:Date;
  kiralama = true;
  rentals:Rental[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private rentalService:RentalService,
    private activatedRoute:ActivatedRoute,
    private router: Router,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createAddFormGroup();
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
      this.currentCarId = Number(params["carId"]);
      
    }
  })
  }
    getRentals() {
        this.rentalService.getRentalsDetail().subscribe(respone => {
            this.rentals = respone.data;
          
        });
    }
   
      tarihfark(a1:Date,a2:Date) {
        var date1:any = new Date(a1);
        var date2:any = new Date(a2);
        var kalangun:any = Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
    
        return kalangun;
      }
    
      rentInfoSave() {
        if (this.addFormGroup.valid) {
          let rental: Rental = Object.assign({}, this.addFormGroup.value);

          rental.carId = this.currentCarId
          rental.customerId = 1
       
        
       
          this.rentalService.rulesForAdding(rental).subscribe(
            (response) => {
            
        
       this.toastrService.success(response.message);
           this.router.navigate(['/payment/' + rental.carId + "/" 
             +this.tarihfark(rental.rentDate,rental.returnDate) + "/" + rental.rentDate + "/" + rental.returnDate]);
           
            
         
           
           
            },(response) => {
              this.toastrService.error(response.error.message);
            }

          );
        } else {
   this.toastrService.error('Kiralanacak tarihi seçiniz.');
        }
      }
      
  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      
      rentDate: ['', Validators.required],
      returnDate: [null],
    });
  }

 
    

}
