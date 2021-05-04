import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
@Injectable({
  providedIn: 'root'
})
export class CapacitorService {

  constructor() { }
  get isWeb() {
    return Capacitor.getPlatform() === 'web';
  }

  get isAndroid() {
    return Capacitor.getPlatform() === 'android';
  }

  get isIOS() {
    return Capacitor.getPlatform() === 'ios';
  }

}
