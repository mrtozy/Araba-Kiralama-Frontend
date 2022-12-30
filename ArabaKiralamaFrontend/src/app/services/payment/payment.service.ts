import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/models/payment/payment';
import { ResponseModel } from 'src/app/models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl = "https://localhost:7026/api/payments/";

  constructor(private httpClient:HttpClient) { }
  pay(payment:Payment):Observable<ResponseModel>{
    let newUrl = this.apiUrl + "pay"
    return this.httpClient.post<ResponseModel>(newUrl, payment);
  }
}
