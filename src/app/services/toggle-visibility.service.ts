import { EventEmitter, Injectable } from '@angular/core';
import { Content } from '../content';

@Injectable({
  providedIn: 'root'
})
export class ToggleVisibilityService {
  contentEmitter = new EventEmitter<Content>();
  constructor() { }
}
