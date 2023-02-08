import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'empDetails/:userId',component:EmpDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
