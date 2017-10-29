import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LoadingIndicatorModule} from "../../../common/loading-indicator/loading-indicator.module";
import {PaginationModule} from "../../../common/pagination/pagination.module";
import {AddressListComponent} from "./address-list.component";

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    PaginationModule
  ],
  declarations: [
    AddressListComponent
  ]
})

export class AddressListModule {

}
