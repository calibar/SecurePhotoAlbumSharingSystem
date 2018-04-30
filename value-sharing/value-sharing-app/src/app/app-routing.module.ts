import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { SampleAssetComponent } from './SampleAsset/SampleAsset.component';


  import { SampleParticipantComponent } from './SampleParticipant/SampleParticipant.component';


  import { SampleTransactionComponent } from './SampleTransaction/SampleTransaction.component';
  import { ChangeOwnerComponent } from './ChangeOwner/ChangeOwner.component';
  import { ViewerReadAssetComponent } from './ViewerReadAsset/ViewerReadAsset.component';  
const routes: Routes = [
     //{ path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'SampleAsset', component: SampleAssetComponent},
    
    
      { path: 'SampleParticipant', component: SampleParticipantComponent},
      
      
        { path: 'SampleTransaction', component: SampleTransactionComponent},
        
        { path: 'ChangeOwner', component: ChangeOwnerComponent},
        
        { path: 'ViewerReadAsset', component: ViewerReadAssetComponent},
        
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
