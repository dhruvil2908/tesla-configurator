import { Injectable, Signal, signal } from '@angular/core';
import { modelColor, modelWithImage, models } from '../models/teslaModels';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  selectedOptionsData: any = [];
  private baseImgUrl: string = "https://interstate21.com/tesla-app/images/";
  teslaModelDetails= signal<modelWithImage[]>([]);

  constructor() { }

  getCurrentOptions(): Signal<modelWithImage[]> {
    return this.teslaModelDetails.asReadonly();
  }

  setTeslaModel(model: models, modelColor: modelColor) {
    this.teslaModelDetails.update((data) => {
      return [{
        modelCode: model.code,
        modelImage: this.baseImgUrl + model.code + "/" + modelColor.code + ".jpg"
      }]
    })
  }
}
