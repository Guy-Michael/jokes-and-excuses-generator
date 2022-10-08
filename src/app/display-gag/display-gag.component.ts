import { Component, OnInit, Input } from '@angular/core';
import { HttpUtils } from '../Utils/HttpUtils';

@Component({
  selector: 'app-display-gag',
  templateUrl: './display-gag.component.html',
  styleUrls: ['./display-gag.component.scss']
})
export class DisplayGagComponent implements OnInit 
{
  @Input() visible: boolean = false;
  @Input() callback: () => Promise<string> = async () => await '';
  @Input() contentText: string = '';
  @Input() buttonText: string = '';

  constructor() { }

  ngOnInit(): void { }

  async onClick(): Promise<void> 
  {
    this.contentText = await this.callback();
  }
}
