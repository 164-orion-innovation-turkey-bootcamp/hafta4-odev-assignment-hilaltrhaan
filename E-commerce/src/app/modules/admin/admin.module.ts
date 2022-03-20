import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './components/home/home.component';

import { ElectronicsComponent } from './components/electronics/electronics.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { FilterPipe } from 'src/app/shared/filter.pipe';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material/sidenav';
import{NgxSliderModule} from '@angular-slider/ngx-slider';
import { ProductsComponent } from './components/products/products.component';
import { MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    HomeComponent,

    ElectronicsComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    UserdetailsComponent,
    CartComponent,
    FilterPipe,

    ProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    MatSidenavModule,
    NgxSliderModule,
    MatMenuModule
  ]
})
export class AdminModule { }
