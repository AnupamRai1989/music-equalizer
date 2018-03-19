import { Component, OnInit } from '@angular/core';
import { BandModel } from './models/band.model';
import { BandsService } from './bands.service';

@Component({
  selector: 'app-bands',
  templateUrl: './bands.component.html',
  styleUrls: ['./bands.component.scss'],
  providers: [
    BandsService
  ]
})
export class BandsComponent implements OnInit {

  bands: BandModel[];
  barHeight: number;
  limits: number[];

  constructor(private bandsService: BandsService) {
    this.barHeight = 300;
  }

  ngOnInit() {
    this.limits = [-12, 0, 12];
    this.getBands();
  }

  getBands(): void {
    this.bandsService.getBands()
      .subscribe((bands: BandModel[]) => this.bands = bands);
  }

}