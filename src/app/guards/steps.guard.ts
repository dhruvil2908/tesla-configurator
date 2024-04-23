import { CanActivateFn, Router } from '@angular/router';
import { TeslaOptions } from '../models/teslaModels';
import { inject } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

export const stepsGuard: CanActivateFn = (route, state) => {
  const sharedDataService = inject(SharedDataService);
  const teslaModelDetails = sharedDataService.getCurrentOptions();
  const router = inject(Router);

  if (state.url === '/step2' && teslaModelDetails().selectedModel === undefined) {
    router.navigate(['']);
    return false;
  }

  return true;
};
