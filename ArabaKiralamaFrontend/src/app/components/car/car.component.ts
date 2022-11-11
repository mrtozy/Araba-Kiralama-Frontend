import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services/car/car.service";
import {Car} from "../../models/car/car";
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car/CarDetailDto';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carDetailDto:CarDetailDto;
    cars: Car[] = [];
    dataLoaded = false;
  
    constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params) => {
          if (params['brandId']) {
            this.getCarsByBrandId(params['brandId']);
          }else if(params["colorId"]){
            this.getCarsByColor(params["colorId"])
          }
          else if(params["carid"]){
            this.getCarDetailsByCarId(params["carid"])
          }
          else {
            this.getCars();
          }
        });
    
       
        
      }
    getCarsByBrandId(brandId: number) {
        this.carService.getCarsByBrandId(brandId).subscribe((response) => {
          this.cars = response.data;
          this.dataLoaded = true;
          console.log(response.data);
        });
      }

    getCars() {
        this.carService.getCars().subscribe(response => {
            this.cars = response.data;
            this.dataLoaded = true;
        });
    }
    getCarsByColor(colorId:number) {
      this.carService.getCarsByColor(colorId).subscribe(response=>{
        this.cars=response.data
        this.dataLoaded=true;
      })
    }
    getCarDetailsByCarId(carid:number) {
      this.carService.getCarDetailsByCarId(carid).subscribe(response=>{
        this.carDetailDto=response.data
       
      })
    }

}
