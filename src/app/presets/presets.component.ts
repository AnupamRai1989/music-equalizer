import { Component, OnInit } from '@angular/core';
import { PresetModel } from './models/preset.model';
import { PresetService } from './preset.service';

@Component({
  selector: 'app-presets',
  templateUrl: './presets.component.html',
  styleUrls: ['./presets.component.scss'],
})
export class PresetsComponent implements OnInit {

  presets: PresetModel[];
  selectedPreset: PresetModel;
  constructor(private presetService: PresetService) { }

  ngOnInit() {
    this.getPresets()
  }

  getPresets() {
    this.presetService.getPresets()
      .subscribe((presets: PresetModel[]) => this.presets = presets);
  }

  presetSelected(preset: PresetModel): void {
    this.selectedPreset = preset;
    this.presetService.onPresetChange(preset);
  }

}
