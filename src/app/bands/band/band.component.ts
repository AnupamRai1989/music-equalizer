import { Component, Input, OnInit } from '@angular/core';
import { BandModel } from '../models/band.model';
import { PresetService } from '../../presets/preset.service';
import { PresetSettingModel } from '../../presets/models/preset-setting.model';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {

  @Input()
  band: BandModel;

  @Input()
  barHeight: number;

  @Input()
  limits: number[];

  bandValue: number;

  constructor(private presetService: PresetService) {
    this.bandValue = 0;
  }

  ngOnInit() {
    this.presetService.onPresetChange$.subscribe((presetSetting: PresetSettingModel) => {
      this.bandValue = presetSetting[this.band.id];
    });
  }

  onBandValueChange(bandValueDiff: number): void {
    const newBandValue: number = this.bandValue + bandValueDiff;
    if (newBandValue <= this.limits[0] || newBandValue >= this.limits[this.limits.length - 1]) {
      return;
    }
    this.bandValue += bandValueDiff;
  }

}