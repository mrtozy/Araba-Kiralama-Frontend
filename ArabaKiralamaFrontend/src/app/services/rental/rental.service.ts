import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Rental } from 'src/app/models/rental/rental';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
    providedIn: 'root'
})
export class RentalService {
    apiUrl = 'https://localhost:7026/api/Rentals/getall';

    constructor(private httpClient: HttpClient) { }

    getRentalsDetail(): Observable<ListResponseModel<Rental>> {
        return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
    }
}
