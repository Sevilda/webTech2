import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { SweetsFormComponent } from './sweets-form/sweets-form.component';
import { SweetsListingComponent } from './sweets-listing/sweets-listing.component';

const routes: Routes = [ 
  {
    path: '',
    component: MainComponent
  },

{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'sweets-listing',
  component: SweetsListingComponent
},
{
  path: 'sweets-form',
  component: SweetsFormComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
