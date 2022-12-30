import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from 'src/app/models/car/car';
import { CarDetailDto } from 'src/app/models/car/CarDetailDto';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';



@Injectable({
    providedIn: 'root'
})
export class CarService {
    apiUrl = 'https://localhost:7026/api/';
    constructor(private httpClient:HttpClient) { }

  getCars() : Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetails"
       return this.httpClient.get<ListResponseModel<Car>>(newPath);
    }
    getCarsByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
        let newPath = this.apiUrl+ 'Cars/getallbybrandid?id='+brandId;
        return this.httpClient.get<ListResponseModel<Car>>(newPath);
      }
      getCarsByColor(colorId:number): Observable<ListResponseModel<Car>> {
        let newPath=this.apiUrl+"Cars/getallbycolorid?id="+colorId
        return this.httpClient.get<ListResponseModel<Car>>(newPath);
        
      }
      getbyid(Id:number):Observable<ListResponseModel<Car>> {
        let newPath=this.apiUrl+"Cars/getbyid?id="+Id
        return this.httpClient.get<ListResponseModel<Car>>(newPath);
        
      }
      
      
  getCarDetailsByCarId(carId: number): Observable<SingleResponseModel<CarDetailDto>> {
    let carDetailPath = this.apiUrl + "Cars/getbyid?Id=" + carId;
    return this.httpClient.get<SingleResponseModel<CarDetailDto>>(carDetailPath);
  }
 
  

}
