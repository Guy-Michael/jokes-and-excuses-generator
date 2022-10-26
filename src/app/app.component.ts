import { Component, OnInit} from '@angular/core';
import { Content } from './content';
import { ToggleVisibilityService } from './services/toggle-visibility.service';
import { HttpUtils } from './Utils/HttpUtils';
import {getRandomInt} from './Utils/RandomUtils'
import {expressions} from './expressions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  jokeVisibility: boolean = true;
  factVisibility: boolean = false;
  excuseVisibility: boolean = false;
  sonyaVisibility: boolean = false;

  title = 'Useful-Utilities';

  constructor(private contentEmitter: ToggleVisibilityService) {}

  ngOnInit(): void
  {
    this.contentEmitter.contentEmitter
    .subscribe((content: Content) =>
    {
      this.setContent(content);
    });

  }

  async getJoke()
  {
    return await HttpUtils.getJoke();
  }

  async getFact()
  {
    return await HttpUtils.getFact();
  }

  async getExcuse()
  {
    return await HttpUtils.getExcuse();
  }

  async getSonya()
  {
    let arr: string[] = [];
    for(let i = 0; i < 5; i++)
    {
      let index: number = getRandomInt(0, expressions.length);
      arr.push(expressions[index]);
    }
    // console.log(arr.join('));
    return await arr.join('<br>');
  }

  setContent(selected: Content) : void
  {


    switch(selected)
    {
      case(Content.Joke):
      {
        this.jokeVisibility = true;
        this.factVisibility = false;
        this.excuseVisibility = false;
        this.sonyaVisibility = false;
        break;
      }
      case(Content.Fact):
      {
        this.jokeVisibility = false;
        this.factVisibility = true;
        this.excuseVisibility = false;
        this.sonyaVisibility = false;
        break;
      }

      case(Content.Excuse):
      {
        this.jokeVisibility = false;
        this.factVisibility = false;
        this.excuseVisibility = true;
        this.sonyaVisibility = false;
        break;
      }
      
      case(Content.Sonya):
      {
        this.jokeVisibility = false;
        this.factVisibility = false;
        this.excuseVisibility = false;
        this.sonyaVisibility = true;
        break;  
      }
    }
  }
}
