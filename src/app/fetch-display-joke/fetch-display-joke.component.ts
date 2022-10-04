import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Joke } from '../Models/Joke';
import { HttpUtils } from '../Utils/HttpUtils';

@Component({
  selector: 'app-fetch-display-joke',
  templateUrl: './fetch-display-joke.component.html',
  styleUrls: ['./fetch-display-joke.component.scss']
})
export class FetchDisplayJokeComponent implements OnInit {
setup: string = "";
punchline: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  async onClick(): Promise<void> 
  {
    let jokes: Joke[] = await HttpUtils.getJokes();
    console.log(jokes);
    this.setup = jokes[0].setup;
    this.punchline = jokes[0].punchline;

  }

}
