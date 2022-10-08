import { Component, OnInit} from '@angular/core';
import { Content } from './content';
import { ToggleVisibilityService } from './services/toggle-visibility.service';
import { HttpUtils } from './Utils/HttpUtils';

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

  setContent(selected: Content) : void
  {


    switch(selected)
    {
      case(Content.Joke):
      {
        this.jokeVisibility = true;
        this.factVisibility = false;
        this.excuseVisibility = false;
        break;
      }
      case(Content.Fact):
      {
        this.jokeVisibility = false;
        this.factVisibility = true;
        this.excuseVisibility = false;
        break;
      }
      case(Content.Excuse):
      {
        this.jokeVisibility = false;
        this.factVisibility = false;
        this.excuseVisibility = true;
        break;
      }
    }

    console.log('visibility joke: ' + this.jokeVisibility);
    console.log('visibility excuse: ' + this.excuseVisibility);
    console.log('visibility fact: ' + this.factVisibility);
  }
}
