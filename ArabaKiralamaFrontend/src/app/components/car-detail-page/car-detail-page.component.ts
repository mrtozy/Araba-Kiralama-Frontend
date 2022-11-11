import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarDetailDto } from 'src/app/models/car/CarDetailDto';

import { CarImage } from 'src/app/models/car/carImage';
import { CarImageService } from 'src/app/services/car-image-service/car-image-service';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-detail-page',
  templateUrl: './car-detail-page.component.html',
  styleUrls: ['./car-detail-page.component.css']
})
export class CarDetailPageComponent implements OnInit {

  carDetail:CarDetailDto;
  cars: Car[] = [];
  carImages:CarImage[];
  dataLoaded = false;
  currentImage: CarImage;
  imageUrl = "https://localhost:7026"

  constructor(private carDetailService:CarService, private carImageService:CarImageService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getImageByCarId(params["carId"]);
      this.getCarById(params["carId"]);
      

      this.getCarDetailsByCarId(params["carId"]);
    
     //buralara yarın bak
    
   
    })
  }

   getCarById(carId:number){
   this.carDetailService.getbyid(carId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = true;
    })
 }

  getImageByCarId(carId:number){
    this.carImageService.getByCarId(carId).subscribe(response => {
      this.carImages = response.data;
      this.dataLoaded = true;
    })
  }
  getCarDetailsByCarId(carId:number){
    this.carDetailService.getCarDetailsByCarId(carId).subscribe(response=>{
      this.carDetail=response.data
    })
      }
  getButtonClass(image: CarImage) {
    if ((image === this.carImages[0])) {
      return 'active';
    } else {
      return '';
    }
  }

  getCurrentImageClass(image: CarImage) {
    if (this.carImages[0] == image) {
      return 'carousel-item active';
    } else {
      return 'carousel-item ';
    }
  }

  setCurrentImageClass(image: CarImage) {
    this.currentImage = image;
  }

  getCarImage(carImage:CarImage, carId: number){
    if (carImage.carId == 0) {
      let path = this.imageUrl + "/images/default.png"
      return path;

    }
    else{
      let path = this.imageUrl + carImage.imagePath;
      return path;
    }
  }

}
