import { Component, Input } from '@angular/core';
import { TeslaModelService } from '../../services/tesla-model.service';
import { ConfigOptions, TeslaOptions } from '../../models/teslaModels';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2Component {
  @Input() model!: string;
  protected includeYoke: boolean = false;
  protected includeTow: boolean = false;
  protected configs: ConfigOptions[] = [];
  protected selectedConfig: ConfigOptions | undefined;
  protected selectedOptions: TeslaOptions = {};

  constructor(private teslaModelService: TeslaModelService, private sharedDataService: SharedDataService) { }

  ngOnInit() {
    let signalData = this.sharedDataService.getCurrentOptions();
    this.selectedOptions.includeTow = signalData().includeTow;
    this.selectedOptions.includeYoke = signalData().includeYoke;

    this.teslaModelService.getConfigurations(this.model).subscribe({
      next: (modelData) => {
        if (modelData !== null) {
          this.configs = modelData.configs;
          this.includeYoke = modelData.yoke;
          this.includeTow = modelData.towHitch;

          this.selectedConfig = this.configs.find(config => config.id === signalData().selectedConfig?.id);
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  setModelConfig(config: ConfigOptions | undefined) {
    if (config !== undefined) {
      this.sharedDataService.setTeslaConfigs(config);
    }
  }

  setModelOptions(option: string) {
    this.sharedDataService.setTeslaOptions(option);
  }
}
