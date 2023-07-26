import { Component, OnInit } from '@angular/core';
import { GetBidPackageFormService } from '../../services/get-bidpackage-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  bidPackageData: any;

  constructor(private getBidPackageService: GetBidPackageFormService) { }

  ngOnInit() {
    this.getBidPackageData();
  }

  getBidPackageData() {
    this.getBidPackageService.getBidPackageData().subscribe(
      (data) => {
        this.bidPackageData = data;
      },
      (error) => {
        console.error('Error fetching bid package data:', error);
      }
    );
  }
}
