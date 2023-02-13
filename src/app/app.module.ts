import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpDetailsComponent,
    EditDialogComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
