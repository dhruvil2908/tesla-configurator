import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { TeslaOptions } from '../../models/teslaModels';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component {
  protected selectedTeslaData?: TeslaOptions;

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() {
    let sharedSignalData = this.sharedDataService.getCurrentOptions();
    this.selectedTeslaData = sharedSignalData();
  }
}
