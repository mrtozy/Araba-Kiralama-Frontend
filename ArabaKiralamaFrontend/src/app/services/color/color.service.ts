import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Color } from 'src/app/models/color/color';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
    providedIn: 'root'
})
export class ColorService {
    apiUrl = 'https://localhost:7026/api/';

    constructor(private httpClient:HttpClient) { }

    getColors() : Observable<ListResponseModel<Color>>{
        let newPath=this.apiUrl+"Colors/getall"
        return this.httpClient.get<ListResponseModel<Color>>(newPath);
    }
  
}
