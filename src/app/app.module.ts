import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { Error404Component } from './error404/error404.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceComponent } from './service/service.component';
import { ShowSerComponent } from './service/show-ser/show-ser.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuideComponent } from './guide/guide.component';
import { InteriordesignComponent } from './interiordesign/interiordesign.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { RepairComponent } from './repair/repair.component';
import { PlumbingComponent } from './plumbing/plumbing.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { MaterialsComponent } from './materials/materials.component';
import { ListingComponent } from './listing/listing.component';
import { DisplayComponent } from './display/display.component';
import { MinheaderComponent } from './minheader/minheader.component';
import {NgxPaginationModule} from 'ngx-pagination';
// import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    Error404Component,
    ServiceComponent,
    ShowSerComponent,
    GuideComponent,
    InteriordesignComponent,
    ArchitectureComponent,
    RepairComponent,
    PlumbingComponent,
    ContractorsComponent,
    MaterialsComponent,
    ListingComponent,
    DisplayComponent,
    MinheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    NgxPaginationModule,
    // Ng2SearchPipeModule,

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
