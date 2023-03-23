import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  closeDropdown: EventEmitter<void> = new EventEmitter();
  closeSidebar: EventEmitter<void> = new EventEmitter();
  
  constructor() {}
}
