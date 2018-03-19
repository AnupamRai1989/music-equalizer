import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { PresetModel } from './models/preset.model';
import { PresetSettingModel } from './models/preset-setting.model';
import { PresetResponseModel } from './models/dto/preset-response.model';
import 'rxjs/add/operator/map';

@Injectable()
export class PresetService {

    private onPresetChangeSubject: Subject<PresetSettingModel> = new Subject<PresetSettingModel>();
    onPresetChange$: Observable<PresetSettingModel> = this.onPresetChangeSubject.asObservable();

    constructor(private http: HttpClient) {
    }

    getPresets(): Observable<PresetModel[]> {
        return this.http.get('/assets/data/presets.json')
            .map((response: PresetResponseModel) => response && response.presets);
    }

    onPresetChange(preset: PresetModel) {
        this.onPresetChangeSubject.next(preset && preset.setting);
    }

}