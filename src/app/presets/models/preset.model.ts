import { PresetSettingModel } from './preset-setting.model';
export class PresetModel {

    constructor(public type: string,
        public setting: PresetSettingModel) {
    }
}