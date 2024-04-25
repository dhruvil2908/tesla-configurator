import {Component, Signal, inject} from '@angular/core';
import {AsyncPipe, JsonPipe, NgIf} from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TeslaOptions } from './models/teslaModels';
import { SharedDataService } from './services/shared-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterLink, RouterOutlet, NgIf],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  name = 'Angular';
  imageUrl: string = '';
  private sharedData = inject(SharedDataService);
  protected currentModelWithImg: Signal<TeslaOptions> = this.sharedData.getCurrentOptions();
}
