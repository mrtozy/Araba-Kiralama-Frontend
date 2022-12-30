import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { CarDetailPageComponent } from './components/car-detail-page/car-detail-page.component';
import { CarComponent } from './components/car/car.component';
import { ColorSelectOptionComponent } from './components/color-select-option/color-select-option.component';
import { ColorComponent } from './components/color/color.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

const routes: Routes = [ {path:"", pathMatch:"full", component:CarComponent},
{path:"cars",component:CarComponent},
{path:"colors:colorId",component:ColorSelectOptionComponent},
{path:"colors/",component:ColorComponent},
{path:"cars/brand/:brandId", component:CarComponent},
{path:"cars/color/:colorId", component:CarComponent},
{path:"payment/:carId/:datesDiff/:rentDate/:returnDate", component:PaymentComponent},
{path:"rentals", component:RentalComponent},

{path:"cars/car-detail-page/:carId", component:CarDetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
