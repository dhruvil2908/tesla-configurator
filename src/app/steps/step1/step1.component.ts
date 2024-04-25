import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TeslaModelService } from '../../services/tesla-model.service';
import { CommonModule } from '@angular/common';
import { ModelColor, Models } from '../../models/teslaModels';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
})
export class Step1Component {
  selectedModel: Models | undefined;
  teslaModelList: Models[] = [];
  modelColorList: ModelColor[] | undefined;
  selectedModelColors: ModelColor | undefined;

  constructor(
    private teslaService: TeslaModelService,
    private sharedData: SharedDataService
  ) { }

  ngOnInit() {
    this.teslaService.getModels().subscribe({
      next: (Model: Models[]) => {
        this.teslaModelList = Model;

        let sharedSignal = this.sharedData.getCurrentOptions();
        this.modelColorList = sharedSignal().selectedModel?.colors || [];

        this.selectedModel = this.teslaModelList.find(model => model.code === sharedSignal().selectedModel?.code);
        this.selectedModelColors = sharedSignal().selectedColor;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  setModel(model: Models | undefined) {
    if (model !== undefined) {
      this.sharedData.setTeslaModel(model, model.colors[0]);
      this.modelColorList = model.colors;
      this.selectedModelColors = model.colors[0];
    } else {
      this.modelColorList = [];
      this.sharedData.setTeslaModel();
    }
  }

  setModelColor(color: ModelColor | undefined) {
    this.selectedModelColors = color;
    this.sharedData.setTeslaModel(this.selectedModel, color);
  }
}
