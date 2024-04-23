import { Component, Input } from '@angular/core';
import { TeslaModelService } from '../../services/tesla-model.service';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2Component {
  @Input() model!: string;

  constructor(private teslaModelService: TeslaModelService) { }

  ngOnInit() {
    this.teslaModelService.getConfigurations(this.model)
  }
}
