import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Content } from '../content';
import { ToggleVisibilityService } from '../services/toggle-visibility.service';

@Component({
  selector: 'app-bottom-navigation-cell',
  templateUrl: './bottom-navigation-cell.component.html',
  styleUrls: ['./bottom-navigation-cell.component.scss']
})
export class BottomNavigationCellComponent implements OnInit {
@Input() iconName : string = "";
@Input() buttonText : string = "";
@Input() type : Content = Content.Joke;

@Output() onCellSelected = new EventEmitter<Content>();

  constructor(private visibilityService: ToggleVisibilityService) { }

  ngOnInit(): void {}

  onClick()
  {
    this.visibilityService.contentEmitter.emit(this.type);
  }

}
