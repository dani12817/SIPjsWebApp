import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: boolean;
  loginInProgress: boolean;
  registerInProgress: boolean;
  loadingExtensions: boolean;
  loadingContacts: boolean;

  holdChangeStatusInProgress: boolean;
}
