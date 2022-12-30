import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { FilterCarPipePipe } from './pipes/filter-car-pipe.pipe';
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { FilterRentalPipePipe } from './pipes/filter-rental-pipe.pipe';
import { ColorSelectOptionComponent } from './components/color-select-option/color-select-option.component';
import { RouterModule } from '@angular/router';
import { BrandSelectOptionComponent } from './components/brand-select-option/brand-select-option/brand-select-option.component';
import { PaymentComponent } from './components/payment/payment.component';


import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
 
   
    CarComponent,
    ColorComponent,
    BrandComponent,
    RentalComponent,
    CustomerComponent,
    NaviComponent,
    CarDetailPageComponent,
    FilterCarPipePipe,
    FilterColorPipePipe,
    FilterRentalPipePipe,
    ColorSelectOptionComponent,
    BrandSelectOptionComponent,
    PaymentComponent
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule,
      ReactiveFormsModule,
      ToastrModule.forRoot({
        positionClass:"toast-bottom-right"
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
