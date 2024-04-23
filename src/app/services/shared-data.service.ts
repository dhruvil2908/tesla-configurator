import { Injectable, Signal, signal } from '@angular/core';
import { TeslaOptions, modelColor, models } from '../models/teslaModels';

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
  setTeslaModel(model?: models, modelColor?: modelColor) {
    this.selectedOptionsData.selectedModel = model;
    this.selectedOptionsData.selectedColor = modelColor;

    this.teslaModelDetails.update((data) => {
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
}
