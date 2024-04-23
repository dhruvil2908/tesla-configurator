import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeslaModelService } from '../../services/tesla-model.service';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { modelColor, models } from '../../models/teslaModels';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule, AsyncPipe, JsonPipe, NgFor, NgIf],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
})
export class Step1Component {
  selectedModel!: models;
  teslaModelList$!: Observable<models[]>;
  modelColorList: modelColor[] | undefined;
  selectedModelColors!: modelColor;

  constructor(
    private teslaService: TeslaModelService,
    private sharedData: SharedDataService
  ) {}

  ngOnInit() {
    this.teslaModelList$ = this.teslaService.getModels()
  }

  setModel(model: models | undefined) {
    if (model !== undefined) {
      this.sharedData.setTeslaModel(model, model.colors[0]);
      this.modelColorList = model.colors;
      this.selectedModelColors = model.colors[0];
    } else {
      this.modelColorList = [];
      this.sharedData.setTeslaModel();
    }
  }

  setModelColor(color: any) {
    this.selectedModelColors = color;
    this.sharedData.setTeslaModel(this.selectedModel, color);
  }
}
