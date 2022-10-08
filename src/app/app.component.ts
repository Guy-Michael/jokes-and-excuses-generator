import { Component } from '@angular/core';
import { HttpUtils } from './Utils/HttpUtils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'Useful-Utilities';

  async getJoke()
  {
    return await HttpUtils.getJoke();
  }

  async getFact()
  {
    return await HttpUtils.getFact();
  }
}
