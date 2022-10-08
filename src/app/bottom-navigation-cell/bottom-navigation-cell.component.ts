import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-navigation-cell',
  templateUrl: './bottom-navigation-cell.component.html',
  styleUrls: ['./bottom-navigation-cell.component.scss']
})
export class BottomNavigationCellComponent implements OnInit {
@Input() destinationLink : string = "";
@Input() iconName : string = "";
@Input() buttonText : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
