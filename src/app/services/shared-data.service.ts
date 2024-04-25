import { Injectable, Signal, signal } from '@angular/core';
import { TeslaOptions, ModelColor, Models, ConfigOptions } from '../models/teslaModels';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  selectedOptionsData: TeslaOptions = {};
  private baseImgUrl: string = "https://interstate21.com/tesla-app/images/";
  teslaModelDetails= signal<TeslaOptions>({});

  constructor() { }

  getCurrentOptions(): Signal<TeslaOptions> {
    return this.teslaModelDetails.asReadonly();
  }

  /**
   * set model details to signal and service variable
   * @param model selected model detail or undefined
   * @param modelColor selected modelcolor or undefined
   */
  setTeslaModel(model?: Models, modelColor?: ModelColor) {
    this.selectedOptionsData.selectedModel = model;
    this.selectedOptionsData.selectedColor = modelColor;

    this.teslaModelDetails.update(() => {
      if (model !== undefined && modelColor !== undefined) {
        return {
          selectedModel: model,
          selectedColor: modelColor,
          modelImage: this.baseImgUrl + model.code + "/" + modelColor.code + ".jpg"
        };
      } else {
        return {};
      }
    });
  }

  setTeslaConfigs(config: ConfigOptions | undefined) {
    this.teslaModelDetails.update((data) => {
      data.selectedConfig = config;
      return data;
    });
  }

  setTeslaOptions(options: string) {
    this.teslaModelDetails.update((data) => {
      if (options === 'towHitch') {
        data.includeTow = true;
      }
      if (options === 'yoke') {
        data.includeYoke = true
      }
      return data;
    });
  }
}
