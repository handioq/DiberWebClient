import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Address} from "../../../../models/address";
import {AddressService} from "../../../../services/address.service";
import {SearchCriteria} from "../../../common/sortable-table/search-criteria";

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addresses: Address[];

  loading = false;
  total = 0;
  page = 1;
  limit = 10;

  @Output() onAddressesLoaded: EventEmitter<any> = new EventEmitter<any>();

  constructor(private addressService: AddressService) {
    this.addresses = [];
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.loading = true;
    this.addressService.getAddresses(this.page - 1, this.limit)
      .subscribe(
        addresses => {
          this.addresses = addresses.content;
          this.total = addresses.totalElements;
          this.loading = false;
          this.onAddressesLoaded.emit(addresses.totalElements);
          this.sort({sortColumn: 'id', sortDirection: 'asc'});
        },
        err => {
          this.logError(err);
          this.loading = false;
        }
      );
  }

  goToPage(n: number) {
    this.page = n;
    this.loadData();
  }

  onNext() {
    this.page++;
    this.loadData();
  }

  onPrev() {
    this.page--;
    this.loadData();
  }

  // Sorting

  onSorted($event) {
    this.addresses = this.sort($event);
  }

  sort(criteria: SearchCriteria): Address[] {
    return this.addresses.sort((a, b) => {
      if (criteria.sortDirection === 'desc') {
        return a[criteria.sortColumn] < b[criteria.sortColumn] ? 1 : -1;
      } else {
        return a[criteria.sortColumn] > b[criteria.sortColumn] ? 1 : -1;
      }
    });
  }

  // TODO Logger
  logError(error) {
    console.error('Error: ' + +error.message ? error.message : error.toString());
  }

}