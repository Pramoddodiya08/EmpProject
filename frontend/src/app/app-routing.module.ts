import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormdataComponent } from './formdata/formdata.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'formData',component:FormdataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
