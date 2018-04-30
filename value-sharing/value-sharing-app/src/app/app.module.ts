import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { SampleAssetComponent } from './SampleAsset/SampleAsset.component';


  import { SampleParticipantComponent } from './SampleParticipant/SampleParticipant.component';


  import { SampleTransactionComponent } from './SampleTransaction/SampleTransaction.component';
  import { ChangeOwnerComponent } from './ChangeOwner/ChangeOwner.component';
  import { ViewerReadAssetComponent } from './ViewerReadAsset/ViewerReadAsset.component';  
@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    
    SampleAssetComponent
    ,
    
    
      SampleParticipantComponent
      ,

    SampleTransactionComponent,
        ChangeOwnerComponent,
        
        ViewerReadAssetComponent
          
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
