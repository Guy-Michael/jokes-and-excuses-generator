import { Component, OnInit } from '@angular/core';
import { HttpUtils } from '../Utils/HttpUtils';

@Component({
  selector: 'app-fetch-display-joke',
  templateUrl: './fetch-display-joke.component.html',
  styleUrls: ['./fetch-display-joke.component.scss']
})
export class FetchDisplayJokeComponent implements OnInit {
joke: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  async onClick(): Promise<void> 
  {
    this.joke = await HttpUtils.getJoke();
  }

}
