import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetailDto } from 'src/app/models/car/CarDetailDto';
import { CarImage } from 'src/app/models/car/carImage';
import { Payment } from 'src/app/models/payment/payment';
import { Rental } from 'src/app/models/rental/rental';
import { CarService } from 'src/app/services/car/car.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  car: CarDetailDto;
  carImages: CarImage[] = [];
  cardOwner:string = "";
  cardNumber:string = "";
  expiryMonthAndYear:string = "";
  cvv:string = "";
  datesDiff:number;
  total:any;
  rentDate:string;
  returnDate:string;
  carDataUpdated = true;
  carImagesUpdated = true;
  currentCarId:number;
  
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
   
    private paymentService:PaymentService,
   
    private rentalService:RentalService,
    private router: Router,private toastrService:ToastrService) { }
    

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarById(params["carId"]);
       
        this.datesDiff = Number(params["datesDiff"]);
        this.currentCarId = Number(params["carId"]);
        this.rentDate = params["rentDate"];
        this.returnDate = params["returnDate"];
      }
    })
  }

  getCarById(carId:number) {
    this.carService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.car = response.data
    
      this.total = this.datesDiff * this.car.dailyPrice;
      this.carDataUpdated = true;
    })   
  }
  


  addRental(){
    let rental:Rental = Object.assign({});
    rental.customerId = 1;
    rental.carId = this.currentCarId;
    rental.rentDate = new Date(this.rentDate);
    rental.returnDate = new Date(this.returnDate);
    
    this.rentalService.rentalAdding(rental).subscribe(response=> {
     this.toastrService.success(response.message);
    })
  }

  pay(){
    if( this.expiryMonthAndYear && this.cardNumber
      && this.cardOwner && this.cvv) {

      let payment: Payment = Object.assign({});

      let expiryies = this.expiryMonthAndYear.split("/");
      console.log("expiryies "+expiryies);
      let replaceCardNumber = this.cardNumber.split(' ').join('');
      payment.customerId = 1;
      payment.fullName = this.cardOwner;
      payment.cardNumber = replaceCardNumber;
      payment.expiryMonth = Number(expiryies[0]);
      payment.expiryYear = Number(expiryies[1]);
      payment.cvv = this.cvv;

      this.paymentService.pay(payment).subscribe(
        (response) => {
          this.toastrService.success(response.message);
          this.addRental();
          setTimeout(() => 
          {
              this.router.navigate(['/']);
          },
          1000);
        }, (response) => {
        this.toastrService.error(response.error.message);
        }
      ); 
    } else {
      this.toastrService.error("Lütfen boş alan bırakmayınız!");
    }
  }

}
