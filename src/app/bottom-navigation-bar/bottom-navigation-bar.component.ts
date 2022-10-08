import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Content } from '../content';

@Component({
  selector: 'app-bottom-navigation-bar',
  templateUrl: './bottom-navigation-bar.component.html',
  styleUrls: ['./bottom-navigation-bar.component.scss']
})
export class BottomNavigationBarComponent implements OnInit 
{
  types = Content;
  @Input() onSelected: (type: Content) => void = () => {};
  @Output() onCellSelected = new EventEmitter<Content>();
  constructor() { }

  ngOnInit(): void  { }

  onClick(type: Content): void 
  {
    console.log(type);
    this.onCellSelected.emit(type);
  }
}
