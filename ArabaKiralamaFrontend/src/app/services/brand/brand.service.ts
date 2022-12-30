import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";

import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Brand } from 'src/app/models/brand/brand';
import { Car } from 'src/app/models/car/car';




@Injectable({
    providedIn: 'root'
})
export class BrandService {
   
    apiUrl = 'https://localhost:7026/api/';

    constructor(private httpClient: HttpClient) { }
   
    getBrands(): Observable<ListResponseModel<Brand>>{
        let newPath=this.apiUrl+"Brands/getall"
        return this.httpClient.get<ListResponseModel<Brand>>(newPath);

       
    }
    getBrandsFillter(brandId: number) : Observable<ListResponseModel<Brand>>{
        let newPath=this.apiUrl+"Colors/getbyid?id="+brandId
        return this.httpClient.get<ListResponseModel<Brand>>(newPath);
    }
}
