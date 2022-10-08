import { Component, OnInit, Input } from '@angular/core';
import { HttpUtils } from '../Utils/HttpUtils';

@Component({
  selector: 'app-display-gag',
  templateUrl: './display-gag.component.html',
  styleUrls: ['./display-gag.component.scss']
})
export class DisplayGagComponent implements OnInit 
{
  @Input() executee: () => Promise<string> = async () => await '';
  displayText: string = "";

  constructor() { }

  ngOnInit(): void 
  {
  }

  async onClick(): Promise<void> 
  {
    console.log("on click");
    this.displayText = await this.executee();
  }
}
