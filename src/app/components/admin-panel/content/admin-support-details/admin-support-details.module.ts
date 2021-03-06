import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminSupportDetailsComponent} from './admin-support-details.component';
import {LoadingIndicatorModule} from '../../../common/loading-indicator/loading-indicator.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminSupportDetailsComponent
  ]
})

export class AdminSupportDetailsModule {

}
